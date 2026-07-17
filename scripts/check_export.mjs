import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const output = resolve("out");
const document = readFileSync(resolve(output, "index.html"), "utf8");
const failures = [];

const attributes = [
  ...document.matchAll(/\b(?:href|src)="([^"]+)"/g),
].map((match) => match[1]);

for (const value of attributes) {
  if (value.startsWith("#")) {
    const id = value.slice(1);
    if (!document.includes(`id="${id}"`)) {
      failures.push(`Missing fragment target: ${value}`);
    }
    continue;
  }

  if (!value.startsWith("/portfolio/")) continue;

  const relative = value.slice("/portfolio/".length).split(/[?#]/)[0];
  const localPath =
    relative === ""
      ? resolve(output, "index.html")
      : relative.endsWith("/")
        ? resolve(output, relative, "index.html")
        : resolve(output, relative);

  if (!existsSync(localPath)) {
    failures.push(`Missing exported resource: ${value}`);
  }
}

for (const required of [
  "og.png",
  "resume.pdf",
  "robots.txt",
  "sitemap.xml",
]) {
  if (!existsSync(resolve(output, required))) {
    failures.push(`Missing required export: ${required}`);
  }
}

for (const forbidden of ["/api/contact", "#blog", "og-image.png"]) {
  if (document.includes(forbidden)) {
    failures.push(`Stale broken reference found: ${forbidden}`);
  }
}

if (!document.includes('type="application/ld+json"')) {
  failures.push("JSON-LD is missing");
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(
  `Export verified: ${attributes.length} links/assets, all fragments and required files present.`
);
