var Utils = require("./Utils");
var lines = require("fs").readFileSync("input.txt", "utf-8").split("\n");

let sum = Utils.getSumAnswersGroup(lines);

console.log("Sum : ", sum);
