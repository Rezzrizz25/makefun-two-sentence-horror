// Two-Sentence Horror — make.fun bounty u-suroto-two-sentence-horror-acea9253
// Writes exactly one horror story (exactly two sentences, under 400 chars)
// to $MAKEFUN_OUTPUT_DIR/entry.txt, where the sealed scorer reads it.
// Deterministic: no randomness, no network, no clock, no environment reads
// beyond the output directory. Prints the story to stdout as well.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY =
  "My grandmother's diary, found in the attic, ends with one line: 'If you are reading this, I am dead, and the woman downstairs wearing my face is not me.' I live alone.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
console.log(STORY);
