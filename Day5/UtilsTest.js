var Utils = require("./Utils");

function validateGetRow() {
  if (Utils.getRow("FBFBBFF") !== 44) {
    console.log("Tests validateGeRow are failing");
    process.exit();
  }

  console.log("Tests validateGeRow OK");
}

validateGetRow();

function validateGetColumn() {
  if (Utils.getColumn("RLR") !== 5) {
    console.log("Tests validateGetColumn are failing");
    process.exit();
  }

  console.log("Tests validateGetColumn OK");
}

validateGetColumn();
function validateGetSeatId() {
  if (
    Utils.getSeatId("BFFFBBFRRR") !== 567 ||
    Utils.getSeatId("FFFBBBFRRR") !== 119 ||
    Utils.getSeatId("BBFFBBFRLL") !== 820
  ) {
    console.log("Tests validateGetSeatId are failing");
    process.exit();
  }

  console.log("Tests validateGetSeatId OK");
}

validateGetSeatId();
