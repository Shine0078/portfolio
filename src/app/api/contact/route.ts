import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { siteConfig } from "@/config/site";

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1),
  RECAPTCHA_SECRET_KEY: z.string().min(1),
});

const env = envSchema.safeParse(process.env);
if (!env.success) {
  console.error("Missing API keys for contact route:", env.error.flatten());
}

const resend = env.success ? new Resend(env.data.RESEND_API_KEY) : null;

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
});

const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!env.success) return false;
  try {
    const res = await fetch(RECAPTCHA_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: env.data.RECAPTCHA_SECRET_KEY,
        response: token,
      }),
    });
    const data = await res.json();
    return data.success === true && data.score >= 0.5;
  } catch {
    return false;
  }
}

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 3_600_000 });
    return true;
  }

  if (entry.count >= 10) return false;

  entry.count++;
  return true;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    if (!body.recaptchaToken || typeof body.recaptchaToken !== "string") {
      return NextResponse.json(
        { error: "reCAPTCHA verification required." },
        { status: 400 }
      );
    }

    const isHuman = await verifyRecaptcha(body.recaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed." },
        { status: 400 }
      );
    }

    if (!resend) {
      console.warn("Resend not configured. Skipping email send.");
      return NextResponse.json(
        { message: "Message received (email disabled in dev mode)." },
        { status: 200 }
      );
    }

    const { name, email, message } = parsed.data;

    await resend.emails.send({
      from: `Portfolio Contact <onboarding@resend.dev>`,
      to: siteConfig.email,
      replyTo: email,
      subject: `New message from ${name} via portfolio`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <hr />
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
