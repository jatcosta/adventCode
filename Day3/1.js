const { exit } = require("process");

var lines = require("fs")
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .filter(Boolean);

let right = 0;

let linesMaxSearchIndex = lines[0].length - 1;
let linesLength = lines[0].length;

let treesFound = 0;

for (const [i, v] of lines.entries()) {
  let character = v.charAt(right);
  // console.log("Search Indexes : ", i, right);

  if (character === "#") {
    treesFound++;
  }

  right += 3;
  if (right > linesMaxSearchIndex) {
    right -= linesLength;
  }
}

console.log("Trees found : ", treesFound);
