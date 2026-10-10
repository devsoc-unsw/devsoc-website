// Saves subcom GitHub pfps to public/people/<YEAR>/github/ and lists them in data/pfps.json
// Change YEAR below, then run: npm run fetch-pfps
// People already in data/pfps.json for that year are skipped
// Run from repo root

import fs from "node:fs";
import ts from "typescript";

const YEAR = 2026;

const EXTENSIONS = { "image/png": "png", "image/jpeg": "jpg", "image/gif": "gif" };
const MANIFEST = "data/pfps.json";

const { outputText } = ts.transpileModule(fs.readFileSync("teamData.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
});
const teamExports = {};
new Function("exports", outputText)(teamExports);

// Exec imgUrls are file paths, subcom ones are GitHub usernames
const usernames = teamExports.teamData[YEAR].subcommittees
  .flatMap((s) => [
    ...s.directors,
    ...s.subcommittee,
    ...(s.other ?? []).flatMap((o) => o.people),
  ])
  .map((p) => p.imgUrl)
  .filter((imgUrl) => imgUrl && !imgUrl.startsWith("/"));

const manifest = fs.existsSync(MANIFEST)
  ? JSON.parse(fs.readFileSync(MANIFEST, "utf8"))
  : {};
const pfps = (manifest[YEAR] ??= {});
fs.mkdirSync(`public/people/${YEAR}/github`, { recursive: true });

for (const username of new Set(usernames)) {
  if (pfps[username]) continue;

  const res = await fetch(`https://github.com/${username}.png?size=160`);
  const ext = EXTENSIONS[res.headers.get("content-type")];
  if (!res.ok || !ext) {
    console.error(`Couldn't fetch ${username} (HTTP ${res.status})`);
    continue;
  }

  pfps[username] = `/people/${YEAR}/github/${username}.${ext}`;
  fs.writeFileSync(`public${pfps[username]}`, Buffer.from(await res.arrayBuffer()));
  console.log(`Saved ${username}`);
}

fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
