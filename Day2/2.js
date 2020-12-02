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
  let position1 = parseInt(limits[0]) - 1;
  let position2 = parseInt(limits[1]) - 1;

  let character = line[1].charAt(0);

  let characterAtPosition1 = line[2].charAt(position1);
  let characterAtPosition2 = line[2].charAt(position2);

  let validation = 0;
  if (characterAtPosition1 === character) {
    validation++;
  }
  if (characterAtPosition2 === character) {
    validation++;
  }

  let resultString = "Not Valid Password";
  if (validation === 1) {
    validPasswords++;
    resultString = "Valid Password";
  }

  console.log(position1, position2, character, line[2], resultString);
}

console.log("Valid password count : ", validPasswords);
