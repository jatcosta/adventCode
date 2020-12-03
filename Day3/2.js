const { exit } = require("process");

var lines = require("fs")
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .filter(Boolean);

function getTrees(input, right, down) {
  let rightPosition = 0;

  let linesMaxSearchIndex = input[0].length - 1;
  let linesLength = input[0].length;

  let treesFound = 0;

  for (const [i, v] of input.entries()) {
    if (i % down === 0) {
      let character = v.charAt(rightPosition);
      // console.log("Search Indexes : ", i, right);

      if (character === "#") {
        treesFound++;
      }

      rightPosition += right;
      if (rightPosition > linesMaxSearchIndex) {
        rightPosition -= linesLength;
      }
    }
  }

  console.log(
    `Trees found : ${treesFound} on right : ${right} and down : ${down}`
  );
  return treesFound;
}

let tressAt11 = getTrees(lines, 1, 1);
let tressAt31 = getTrees(lines, 3, 1);
let tressAt51 = getTrees(lines, 5, 1);
let tressAt71 = getTrees(lines, 7, 1);
let tressAt12 = getTrees(lines, 1, 2);

let totalTrees = tressAt11 * tressAt31 * tressAt51 * tressAt71 * tressAt12;

console.log("Total trees : ", totalTrees);
