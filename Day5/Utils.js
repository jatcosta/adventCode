function getRow(boardingPass) {
  let lowerIndex = 0;
  let higherIndex = 127;

  let data = boardingPass.substring(0, 7);
  // console.log(lowerIndex, higherIndex);
  for (let char of data) {
    if (char === "F") {
      higherIndex = Math.floor((higherIndex - lowerIndex) / 2) + lowerIndex;
    } else if (char === "B") {
      lowerIndex += Math.floor((higherIndex - lowerIndex) / 2) + 1;
    } else {
      console.log("Unknown character ar row : ", char);
      return 0;
    }
    // console.log(lowerIndex, higherIndex);
  }

  if (lowerIndex !== higherIndex) {
    console.log(
      "Something went wrong on row calculation : ",
      lowerIndex,
      higherIndex
    );
    return 0;
  }
  return lowerIndex;
}
function getColumn(boardingPass) {
  let data = boardingPass.slice(-3);
  let lowerIndex = 0;
  let higherIndex = 7;

  // console.log(lowerIndex, higherIndex);
  for (let char of data) {
    if (char === "L") {
      higherIndex = Math.floor((higherIndex - lowerIndex) / 2) + lowerIndex;
    } else if (char === "R") {
      lowerIndex += Math.floor((higherIndex - lowerIndex) / 2) + 1;
    } else {
      console.log("Unknown character ar row : ", char);
      return 0;
    }
    // console.log(lowerIndex, higherIndex);
  }

  if (lowerIndex !== higherIndex) {
    console.log(
      "Something went wrong on col calculation : ",
      lowerIndex,
      higherIndex
    );
    return 0;
  }
  return lowerIndex;
}

function getSeatId(boardingPass) {
  let row = getRow(boardingPass);
  let col = getColumn(boardingPass);

  return row * 8 + col;
}

module.exports = {
  getSeatId,
  getColumn,
  getRow,
};
