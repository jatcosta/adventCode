var Utils = require("./Utils");

var lines = require("fs")
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .filter(Boolean);

let input = [];
for (const [i, v] of lines.entries()) {
if (v.length !== 0) {
  input.push(parseInt(v, 10));
}
}

let notSumValue = Utils.getFirstValueNotSumPrevious(input,25);


console.log("Value not sum of previous : ", notSumValue);
