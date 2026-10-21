// Adds subcom members to teamData.ts and saves their GitHub pfps for YEAR
// Reads scripts/pfps.csv with name,portfolio,github rows and no header, see scripts/pfps.example.csv
// Portfolio must match a team name in teamData.ts for YEAR, leave github blank for no pfp
// pfps.csv is gitignored, GitHub usernames shouldn't be committed
// Change YEAR below, then run from repo root: npm run fetch-pfps
// People already in teamData.ts or data/pfps.json for that year are skipped

import fs from "node:fs";
import { teamData } from "../teamData.ts";

const YEAR = 2026;

const CSV = "scripts/pfps.csv";
const TEAM_DATA = "teamData.ts";
const MANIFEST = "data/pfps.json";
const EXTENSIONS: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/gif": "gif",
};

const normalise = (s: string) => s.replace(/\u00A0/g, " ").trim().toLowerCase();

const rows = fs
  .readFileSync(CSV, "utf8")
  .split(/\r?\n/)
  .filter((line) => line.trim())
  .map((line) => {
    const [name, portfolio, github = ""] = line.split(",").map((cell) => cell.trim());
    // Accept profile links as well as usernames
    return { name, portfolio, github: github.replace(/^.*github\.com\//, "").replace(/\/$/, "") };
  });

const teams = teamData[YEAR].subcommittees;
const unknown = [...new Set(rows.map((r) => r.portfolio))].filter(
  (p) => !teams.some((t) => normalise(t.name) === normalise(p))
);
if (unknown.length > 0) {
  console.error(`No ${YEAR} team in teamData.ts called: ${unknown.join(", ")}`);
  process.exit(1);
}

// Add anyone missing to the end of their team's subcommittee list
const names = new Set(
  teams
    .flatMap((t) => [...t.directors, ...t.subcommittee, ...(t.other ?? []).flatMap((o) => o.people)])
    .map((p) => p.name)
);
let source = fs.readFileSync(TEAM_DATA, "utf8");
const yearStart = source.indexOf(`\n  ${YEAR}: {`);

for (const team of teams) {
  const added = rows
    .filter((r) => normalise(r.portfolio) === normalise(team.name) && !names.has(r.name))
    .map((r) => r.name);
  if (added.length === 0) continue;
  added.forEach((name) => names.add(name));

  const teamName = JSON.stringify(team.name).replace(/\u00A0/g, "\\u00A0");
  const teamStart = source.indexOf(`name: ${teamName},`, yearStart);
  const listStart = source.indexOf("subcommittee: [", teamStart);
  const listEnd = source.indexOf("]", listStart) + 1;
  if (teamStart === -1 || listStart > source.indexOf("\n  },", yearStart)) {
    throw new Error(`Couldn't find ${team.name} in ${TEAM_DATA}`);
  }
  const people = [...team.subcommittee.map((p) => p.name), ...new Set(added)];
  const list = people.map((name) => `          { name: ${JSON.stringify(name)} },\n`).join("");
  source = source.slice(0, listStart) + `subcommittee: [\n${list}        ]` + source.slice(listEnd);
  console.log(`Added ${new Set(added).size} to ${team.name}`);
}
fs.writeFileSync(TEAM_DATA, source);

const manifest: Record<string, Record<string, string>> = fs.existsSync(MANIFEST)
  ? JSON.parse(fs.readFileSync(MANIFEST, "utf8"))
  : {};
const pfps = (manifest[YEAR] ??= {});
fs.mkdirSync(`public/people/${YEAR}/subcom`, { recursive: true });

for (const { name, github } of rows) {
  if (pfps[name] || !github) continue;

  const res = await fetch(`https://github.com/${github}.png?size=160`);
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
