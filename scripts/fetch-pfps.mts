// Saves subcom GitHub pfps to public/people/<YEAR>/subcom/ and lists them in data/pfps.json
// Reads scripts/pfps.csv with name,github rows and no header, see scripts/pfps.example.csv
// Names must match teamData.ts exactly, leave github blank for no pfp
// pfps.csv is gitignored, GitHub usernames shouldn't be committed
// Change YEAR below, then run from repo root: npm run fetch-pfps
// People already in data/pfps.json for that year are skipped

import fs from "node:fs";
import { teamData } from "../teamData.ts";

const YEAR = 2026;

const CSV = "scripts/pfps.csv";
const MANIFEST = "data/pfps.json";
const EXTENSIONS: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/gif": "gif",
};

const names = new Set(
  teamData[YEAR].subcommittees
    .flatMap((s) => [
      ...s.directors,
      ...s.subcommittee,
      ...(s.other ?? []).flatMap((o) => o.people),
    ])
    .map((p) => p.name)
);

const rows = fs
  .readFileSync(CSV, "utf8")
  .split(/\r?\n/)
  .filter((line) => line.trim())
  .map((line) => line.split(",").map((cell) => cell.trim()));

const manifest: Record<string, Record<string, string>> = fs.existsSync(MANIFEST)
  ? JSON.parse(fs.readFileSync(MANIFEST, "utf8"))
  : {};
const pfps = (manifest[YEAR] ??= {});
fs.mkdirSync(`public/people/${YEAR}/subcom`, { recursive: true });

for (const [name, username] of rows) {
  if (!names.has(name)) {
    console.error(`${name} isn't a ${YEAR} subcom member in teamData.ts`);
    continue;
  }
  if (pfps[name] || !username) continue;

  const res = await fetch(`https://github.com/${username}.png?size=160`);
  const ext = EXTENSIONS[res.headers.get("content-type") ?? ""];
  if (!res.ok || !ext) {
    console.error(`Couldn't fetch ${name} (HTTP ${res.status})`);
    continue;
  }

  const file = name.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  pfps[name] = `/people/${YEAR}/subcom/${file}.${ext}`;
  fs.writeFileSync(`public${pfps[name]}`, Buffer.from(await res.arrayBuffer()));
  console.log(`Saved ${name}`);
}

fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
