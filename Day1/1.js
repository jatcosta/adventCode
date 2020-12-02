var lines = require("fs")
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .filter(Boolean);

for (const [i, v] of lines.entries()) {
  let value1 = parseInt(v, 10);
  for (const [i2, v2] of lines.entries()) {
    let value2 = parseInt(v2, 10);

    if (i !== i2) {
      if (value1 + value2 === 2020) {
        console.log(v, v2);
        console.log(value1 * value2);
      }
    }
  }
}
