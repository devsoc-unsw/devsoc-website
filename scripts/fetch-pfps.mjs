// Saves subcom GitHub pfps to public/people/<YEAR>/subcom/ and lists them in data/pfps.json
// Takes a CSV of name,github with names matching teamData.ts exactly
// Change YEAR below, then run: npm run fetch-pfps -- path/to/subcom.csv
// Keep the CSV out of the repo, GitHub usernames shouldn't be committed
// People already in data/pfps.json for that year are skipped
// Run from repo root

import fs from "node:fs";
import ts from "typescript";

const YEAR = 2026;

const EXTENSIONS = { "image/png": "png", "image/jpeg": "jpg", "image/gif": "gif" };
const MANIFEST = "data/pfps.json";

const csvPath = process.argv[2];
if (!csvPath) {
  console.error("Usage: npm run fetch-pfps -- path/to/subcom.csv");
  process.exit(1);
}

const { outputText } = ts.transpileModule(fs.readFileSync("teamData.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
});
const teamExports = {};
new Function("exports", outputText)(teamExports);
const names = new Set(
  teamExports.teamData[YEAR].subcommittees
    .flatMap((s) => [
      ...s.directors,
      ...s.subcommittee,
      ...(s.other ?? []).flatMap((o) => o.people),
    ])
    .map((p) => p.name)
);

const rows = fs
  .readFileSync(csvPath, "utf8")
  .split(/\r?\n/)
  .slice(1)
  .filter((line) => line.trim())
  .map((line) => line.split(",").map((cell) => cell.trim()));

const manifest = fs.existsSync(MANIFEST)
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
  const ext = EXTENSIONS[res.headers.get("content-type")];
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
