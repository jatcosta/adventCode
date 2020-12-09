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

let encryptionWeakness = Utils.getEncryptionWeakness(input, 2089807806);

console.log("Encryption Weakness  : ", encryptionWeakness);
