import { cpSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve("dist");
const client = resolve(dist, "client", "portfolio");
const server = resolve(dist, "server");

rmSync(dist, { recursive: true, force: true });
mkdirSync(client, { recursive: true });
mkdirSync(server, { recursive: true });

cpSync(resolve("out"), client, { recursive: true });
cpSync(resolve("hosting", "worker.js"), resolve(server, "index.js"));

console.log(`Prepared Sites deployment in ${dist}`);
