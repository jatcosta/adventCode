var Utils = require("./Utils");
var lines = require("fs").readFileSync("input.txt", "utf-8").split("\n");

let sum = Utils.getSumAnswersGroupAllYes(lines);

console.log("Sum : ", sum);
