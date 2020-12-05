var Utils = require("./Utils");
var lines = require("fs")
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .filter(Boolean);

function getHighestSeatFromFile() {
  let highestSeatId = 0;
  for (const [i, v] of lines.entries()) {
    if (v.length !== 10) {
      console.log("Board without the expected size : ", v.length);
    } else {
      let seatId = Utils.getSeatId(v);
      if (seatId > highestSeatId) highestSeatId = seatId;
    }
  }
  return highestSeatId;
}

let highestSeatId = getHighestSeatFromFile();
console.log("Highest Seat ID : ", highestSeatId);
