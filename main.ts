// Fridge Roast: One Line, Biggest Laugh
// Entry program for make.fun competition
// u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb
//
// The program writes a single original roast line, at most 200
// characters, to /output/entry.txt. The line is aimed squarely at a
// smart fridge: its pushy door-open notifications versus the one job
// it never warns you about — the food quietly rotting inside it.
//
// The program self-checks the house gate before writing: the text
// must be UTF-8, 1 to 200 characters, and not only white space.
// If the line ever broke the gate, the run fails loudly instead of
// handing the judge an invalid entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "Your fridge texts you when the door's been open 30 seconds, " +
  "but stays dead silent while the leftovers achieve sentience.";

if (!ROAST.trim()) {
  throw new Error("roast line is empty or only white space");
}
if (ROAST.length > 200) {
  throw new Error(`roast line is ${ROAST.length} characters, over the 200 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST + "\n", "utf8");
