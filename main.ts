// The Robot Pickup Line Championship — v1 entry.
//
// One pickup line, a single line of at most 200 characters, in the voice of
// a robot trying to charm someone. The program writes exactly that line to
// /output/entry.txt. Deterministic, Node stdlib only, works from any cwd.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My sensors report you're 98% perfect. The other 2% is a rounding error I'll gladly ignore.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`(${LINE.length} chars)`);
