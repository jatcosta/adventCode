var lines = require("fs")
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .filter(Boolean);

for (const [i, v] of lines.entries()) {
  let value1 = parseInt(v, 10);
  for (const [i2, v2] of lines.entries()) {
    let value2 = parseInt(v2, 10);

    for (const [i3, v3] of lines.entries()) {
      let value3 = parseInt(v3, 10);

      if (i !== i2 && i2 !== i3) {
        if (value1 + value2 + value3 === 2020) {
          console.log(v, v2, v3);
          console.log(value1 * value2 * value3);
        }
      }
    }
  }
}
