import { cpSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const source = resolve("out");
const destination = resolve("tmp", "lighthouse", "portfolio");

mkdirSync(destination, { recursive: true });
cpSync(source, destination, { recursive: true, force: true });

console.log(`Prepared Lighthouse fixture at ${destination}`);
