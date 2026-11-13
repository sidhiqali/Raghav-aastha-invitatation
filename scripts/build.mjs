import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");
const side = process.env.INVITATION_SIDE === "bride" ? "bride" : "groom";

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
for (const entry of ["index.html", "assets", "bride-profile.js"]) {
  cpSync(resolve(root, entry), resolve(dist, entry), { recursive: true });
}
writeFileSync(resolve(dist, "profile-config.js"), `window.__INVITATION_SIDE__ = ${JSON.stringify(side)};\n`);
