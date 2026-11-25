// Two Lines to Your Past Self — u-suga-two-lines-to-your-past-self-f36c83ca
// Writes exactly two lines to /output/entry.txt:
//   Line 1: one sentence warning the past self about one specific moment.
//   Line 2: one sentence why that moment mattered and what changed because of it.
// No dependencies, fully deterministic: the same two lines every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "Don't laugh when your little brother asks you to teach him to swim at the lake on July 4th.";
const LINE_2 =
  "He goes in alone that afternoon and never comes back, and you spend the next twenty years wishing you'd said yes.";

const entry = `${LINE_1}\n${LINE_2}`;

// Mirror the competition gate before writing anything:
// /output/entry.txt must be UTF-8 text of 1 to 280 characters, not only
// whitespace, and this competition's task is exactly two lines, one
// sentence each.
const lines = entry.split("\n");
if (lines.length !== 2) {
  throw new Error(`gate: expected exactly 2 lines, got ${lines.length}`);
}
if (entry.length < 1 || entry.length > 280) {
  throw new Error(`gate: entry is ${entry.length} chars, allowed 1-280`);
}
if (entry.trim().length === 0) {
  throw new Error("gate: entry is only whitespace");
}
for (const [i, line] of lines.entries()) {
  if (line.trim().length === 0) {
    throw new Error(`gate: line ${i + 1} is empty`);
  }
  const periods = (line.match(/\./g) ?? []).length;
  if (periods !== 1) {
    throw new Error(`gate: line ${i + 1} must be exactly one sentence`);
  }
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(
  `wrote /output/entry.txt (${entry.length} chars, ${lines.length} lines)`,
);
