import type { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import { ArrowUpRight, Download } from "@/components/Icons";

export const metadata: Metadata = generateMetadata({
  title: "FINVERSE — AI-Powered Personal Finance",
  description:
    "FINVERSE is a privacy-first, offline-capable personal finance platform: automatic bank sync, budgets, goals, insights, cash-flow forecasting, and a 0–1000 financial health score. Built with NestJS, PostgreSQL, and Flutter.",
});

const LINKS = {
  launch: "https://shine0078.github.io/starter/app/",
  android:
    "https://github.com/Shine0078/starter/releases/download/v0.1.0/FINVERSE-v0.1.0.apk",
  release: "https://github.com/Shine0078/starter/releases/tag/v0.1.0",
  source: "https://github.com/Shine0078/starter",
} as const;

const features = [
  {
    title: "Automatic bank sync",
    body: "Connects real institutions through Plaid Link with incremental sync, token re-auth, and encrypted token storage.",
  },
  {
    title: "Smart categorisation",
    body: "A merchant lexicon plus a per-user correction learner that predicts categories from the user's own explicit corrections — rules and lexicon still win.",
  },
  {
    title: "Financial health score",
    body: "A transparent 0–1000 score with per-component actions, not a black box.",
  },
  {
    title: "Cash-flow forecast",
    body: "A conservative liquid-cash outlook from repeatable income and bills, with a purchase simulator for one-off decisions.",
  },
  {
    title: "Budgets & goals",
    body: "Monthly budgets with spend thresholds and projections, plus savings goals with contributions.",
  },
  {
    title: "Recurring-cost radar",
    body: "Detects subscriptions, price rises, duplicate charges, and unusual spending, and surfaces them as alerts.",
  },
  {
    title: "Reports & exports",
    body: "A multi-page monthly PDF, CSV ledger export, and portable JSON data export — all generated on demand.",
  },
  {
    title: "Security-first auth",
    body: "Argon2id hashing, rotating refresh tokens with reuse detection, TOTP two-factor with recovery codes, passkeys, and a device app lock.",
  },
  {
    title: "On-device receipt OCR",
    body: "Receipt photos are transcribed on the device; only the recognised text is uploaded, never the image.",
  },
  {
    title: "Offline-capable",
    body: "Encrypted read cache and a mutation queue keep the dashboard usable through refresh outages.",
  },
];

const stack = [
  "NestJS",
  "TypeScript",
  "PostgreSQL",
  "Flutter",
  "Dart",
  "Docker",
  "Plaid",
  "Stripe",
  "WebAuthn",
  "FCM",
  "ML Kit",
  "GitHub Actions",
];

export default function FinverseProjectPage() {
  return (
    <>
      <section className="fin-hero">
        <div className="container fin-hero-inner">
          <a className="fin-back" href="/portfolio/#projects">
            ← Back to projects
          </a>

          <div className="fin-hero-grid">
            <div className="fin-hero-copy">
              <p className="section-label">
                <b>01</b>
                Project case study
                <i aria-hidden="true" />
              </p>
              <h1>FINVERSE</h1>
              <p className="fin-hero-role">
                AI-powered personal finance · Android · Web/PWA · iOS
              </p>
              <p className="fin-hero-tagline">
                A privacy-first, offline-capable personal finance platform. It
                pulls your accounts together, explains where your money went,
                and forecasts what happens next — without ever seeing your
                banking credentials.
              </p>

              <div className="fin-cta">
                <a
                  className="button button-primary"
                  href={LINKS.launch}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowUpRight />
                  Launch FINVERSE
                </a>
                <a
                  className="button button-primary fin-cta-download"
                  href={LINKS.android}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download />
                  Download for Android
                </a>
                <a
                  className="button button-secondary"
                  href={LINKS.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View source
                  <ArrowUpRight />
                </a>
              </div>
            </div>

            <div className="fin-hero-art" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portfolio/finverse/app-icon.png"
                alt=""
                width={192}
                height={192}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-subtle">
        <div className="container section-inner">
          <div className="fin-overview">
            <h2>What it is</h2>
            <p>
              FINVERSE is a full-stack personal finance platform built to be{" "}
              <strong>privacy-first by construction</strong>. The domain rules —
              categorisation, budget arithmetic, insight derivation, and the
              health score — are pure functions over plain data with no
              framework, no database, and no I/O. Everything else is an adapter
              behind a port interface, which is why the core logic runs in
              under two seconds without a database and is exercised by 564
              passing tests.
            </p>
            <p>
              The Flutter client ships the same product to Android, iOS, and the
              web as an installable PWA. Bank credentials never reach the app:
              Plaid Link handles authentication in a hosted flow and the API
              stores only encrypted access tokens.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-inner">
          <div className="fin-heading">
            <p className="section-label">
              <b>02</b>
              Major features
              <i aria-hidden="true" />
            </p>
            <h2>Core capabilities</h2>
          </div>

          <div className="fin-features">
            {features.map((feature) => (
              <article className="fin-feature" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-subtle">
        <div className="container section-inner">
          <div className="fin-heading">
            <p className="section-label">
              <b>03</b>
              Architecture
              <i aria-hidden="true" />
            </p>
            <h2>How it is put together</h2>
          </div>

          <div className="fin-arch">
            <div className="fin-arch-flow" aria-label="Architecture diagram">
              <div className="fin-arch-node">
                <span>Clients</span>
                <b>Flutter</b>
                <i>Android · iOS · Web/PWA</i>
              </div>
              <div className="fin-arch-edge" aria-hidden="true">
                HTTPS / JSON
              </div>
              <div className="fin-arch-node">
                <span>API</span>
                <b>NestJS</b>
                <i>controllers → services → ports</i>
              </div>
              <div className="fin-arch-edge" aria-hidden="true">
                adapters
              </div>
              <div className="fin-arch-node">
                <span>Infrastructure</span>
                <b>PostgreSQL · Plaid · Stripe · FCM</b>
                <i>memory or Postgres store, behind one port</i>
              </div>
            </div>

            <ul className="fin-arch-points">
              <li>
                <b>Pure domain layer</b>
                <p>
                  Categorisation, budgets, insights, and the health score are
                  plain functions — no framework imports, no database, no clock.
                  (ADR-0002)
                </p>
              </li>
              <li>
                <b>Ports and adapters</b>
                <p>
                  Two store implementations (in-memory and PostgreSQL) satisfy
                  the same interface, so the domain and controllers never know
                  the difference.
                </p>
              </li>
              <li>
                <b>Row-level security</b>
                <p>
                  The API connects as a restricted role that PostgreSQL
                  row-level-security policies isolate; a superuser would bypass
                  every policy silently. (ADR-0006)
                </p>
              </li>
              <li>
                <b>Shared contracts</b>
                <p>
                  A shared <code>packages/contracts</code> package keeps the
                  API and client types in agreement.
                </p>
              </li>
            </ul>
          </div>

          <h3 className="fin-subhead">Tech stack</h3>
          <ul className="tag-list" aria-label="Tech stack">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container section-inner">
          <div className="fin-heading">
            <p className="section-label">
              <b>04</b>
              Privacy &amp; security
              <i aria-hidden="true" />
            </p>
            <h2>Built to hold other people&apos;s money data</h2>
          </div>

          <ul className="fin-security">
            <li>
              <b>No secrets in the client</b>
              <p>
                Plaid credentials, signing keys, and database passwords live
                server-side only. The release APK and web bundle contain no
                secrets — verified before publishing.
              </p>
            </li>
            <li>
              <b>Encrypted tokens</b>
              <p>
                Plaid access tokens are AES-256-GCM encrypted at rest; they are
                never returned to the client or written to logs.
              </p>
            </li>
            <li>
              <b>Credentials never touch the app</b>
              <p>
                Plaid Link runs in a hosted, tokenised flow. Card details never
                reach the API — Stripe handles checkout and card management on
                its own pages, keeping PCI DSS out of scope.
              </p>
            </li>
            <li>
              <b>Password hygiene</b>
              <p>
                Argon2id hashing and Have I Been Pwned k-anonymity screening,
                so only a SHA-1 prefix leaves the server — never the password
                or a full hash.
              </p>
            </li>
            <li>
              <b>Data ownership</b>
              <p>
                Password-confirmed portable JSON export and a recoverable
                account-deletion path with a proven erasure flow.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section-subtle">
        <div className="container section-inner">
          <div className="fin-heading">
            <p className="section-label">
              <b>05</b>
              Install
              <i aria-hidden="true" />
            </p>
            <h2>Get it on your device</h2>
          </div>

          <div className="fin-install">
            <article className="fin-install-card">
              <h3>Android</h3>
              <p>
                Download the signed release APK and install it directly — no
                store account required.
              </p>
              <ol>
                <li>
                  Download{" "}
                  <a href={LINKS.android} target="_blank" rel="noopener noreferrer">
                    FINVERSE-v0.1.0.apk
                  </a>
                  .
                </li>
                <li>
                  Allow &ldquo;Install unknown apps&rdquo; for your browser or
                  file manager.
                </li>
                <li>Open the file and tap Install.</li>
              </ol>
            </article>

            <article className="fin-install-card">
              <h3>iPhone</h3>
              <p>
                No App Store needed. Install the PWA through Safari&apos;s
                home-screen flow.
              </p>
              <ol>
                <li>
                  Open{" "}
                  <a href={LINKS.launch} target="_blank" rel="noopener noreferrer">
                    the FINVERSE web app
                  </a>{" "}
                  in Safari.
                </li>
                <li>Tap Share, then &ldquo;Add to Home Screen&rdquo;.</li>
                <li>Launch it from the home screen — it runs full-screen.</li>
              </ol>
            </article>

            <article className="fin-install-card">
              <h3>Desktop</h3>
              <p>Works in any modern browser on Windows, macOS, and Linux.</p>
              <ol>
                <li>
                  Open{" "}
                  <a href={LINKS.launch} target="_blank" rel="noopener noreferrer">
                    the FINVERSE web app
                  </a>
                  .
                </li>
                <li>Create an account to begin.</li>
                <li>Optional: install the PWA for a native feel.</li>
              </ol>
            </article>
          </div>

          <div className="fin-version">
            <p>
              <b>Version</b> v0.1.0 (build 1) · signed with the FINVERSE
              release key (SHA-256{" "}
              <code>0561a8e8…ff23</code>) · MIT licensed.
            </p>
            <a
              className="button button-secondary"
              href={LINKS.release}
              target="_blank"
              rel="noopener noreferrer"
            >
              Release notes
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
