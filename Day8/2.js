var Utils = require("./Utils");
var lines = require("fs")
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .filter(Boolean);

let accumulator = Utils.getAccumulatorBeforeLoopIgnoreBadOperation(lines);

console.log("Accumulator : ", accumulator);
