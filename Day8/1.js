var Utils = require("./Utils");
var lines = require("fs").readFileSync("input.txt", "utf-8").split("\n");

let accumulator = Utils.getAccumulatorBeforeLoop(lines);

console.log("Accumulator : ", accumulator);
