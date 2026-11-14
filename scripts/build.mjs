import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");
const side = process.env.INVITATION_SIDE === "bride" ? "bride" : "groom";

const host = side === "bride"
  ? "https://raghav-aastha-bride.vercel.app"
  : "https://raghav-aastha-groom.vercel.app";
const names = side === "bride" ? "Aastha &amp; Raghav" : "Raghav &amp; Aastha";
const spokenNames = side === "bride" ? "Aastha and Raghav" : "Raghav and Aastha";
const shareImage = side === "bride" ? "share-preview-bride.png" : "share-preview.png";

function buildHtml() {
  let html = readFileSync(resolve(root, "index.html"), "utf8");
  html = html
    .replaceAll("https://raghav-aastha-invitation.vercel.app", host)
    .replaceAll("Raghav &amp; Aastha", names)
    .replaceAll("Raghav and Aastha", spokenNames)
    .replaceAll("Raghav and Aastha in their wedding attire", `${spokenNames} in their wedding attire`)
    .replaceAll("share-preview.png", shareImage);
  return html;
}

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
for (const entry of ["assets", "bride-profile.js"]) {
  cpSync(resolve(root, entry), resolve(dist, entry), { recursive: true });
}
writeFileSync(resolve(dist, "index.html"), buildHtml());
writeFileSync(resolve(dist, "profile-config.js"), `window.__INVITATION_SIDE__ = ${JSON.stringify(side)};\n`);
