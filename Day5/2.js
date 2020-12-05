var Utils = require("./Utils");

var lines = require("fs")
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .filter(Boolean);

function getMissingSeats() {
  let seats = [];
  for (const [i, v] of lines.entries()) {
    if (v.length !== 10) {
      console.log("Board without the expected size : ", v.length);
    } else {
      seats.push(Utils.getSeatId(v));
    }
  }

  let maxSeat = Math.max(...seats);
  let minSeat = Math.min(...seats);

  let missingSeats = [];
  for (let counter = minSeat; counter < maxSeat; counter++) {
    if (!seats.includes(counter)) missingSeats.push(counter);
  }
  return missingSeats;
}

let missingSeats = getMissingSeats();

console.log("Missing seats : ", missingSeats);
