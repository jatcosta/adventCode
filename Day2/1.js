const { exit } = require("process");

var lines = require("fs")
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .filter(Boolean);

let validPasswords = 0;
for (const [i, v] of lines.entries()) {
  var line = v.split(" ");

  if (line.length !== 3) {
    console.error("error parsing lines");
    exit();
  }

  let limits = line[0].split("-");
  if (limits.length !== 2) {
    console.error("error parsing limits");
    exit();
  }
  let lowestLimit = parseInt(limits[0]);
  let highestLimit = parseInt(limits[1]);

  let character = line[1].charAt(0);
  console.log(lowestLimit, highestLimit, character);

  var re = new RegExp(character, "g");
  var count = (line[2].match(re) || []).length;
  console.log(count);

  if (count >= lowestLimit && count <= highestLimit) {
    validPasswords++;
  }
}

console.log("Valid password count : ", validPasswords);
