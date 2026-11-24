import { mkdirSync, writeFileSync } from "node:fs";

// One word, one username: "Snaccident" — snack + accident in one bite.
// It smiles on first read with no explanation, sticks after one look,
// reads like a real handle, and is a joke you wear, not a jab at anyone.
const ENTRY = "Snaccident";

// The gate wants one word of 1 to 30 characters, not only whitespace.
if (ENTRY !== ENTRY.trim() || ENTRY.length < 1 || ENTRY.length > 30 || /\s/.test(ENTRY)) {
  throw new Error(`entry must be one word of 1-30 chars, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
