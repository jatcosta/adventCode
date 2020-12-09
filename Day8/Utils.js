function updatedValue(value, string) {
  let operation = string.charAt(0);
  let stringValue = parseInt(string.substring(1), 10);

  if (operation === "+") return value + stringValue;

  if (operation === "-") return value - stringValue;

  console.log("Unable to update value");
  return 0;
}

function getAccumulatorBeforeLoop(input) {
  let accumulator = 0;
  let visited = [];
  let currentIndex = 0;

  while (!visited.includes(currentIndex)) {
    visited.push(currentIndex);

    var lineValue = input[currentIndex].split(" ");

    if (lineValue.length !== 2) {
      console.log("Unknown line");
      return 0;
    }

    switch (lineValue[0]) {
      case "nop": {
        currentIndex++;
        break;
      }
      case "acc": {
        accumulator = updatedValue(accumulator, lineValue[1]);
        currentIndex++;
        break;
      }
      case "jmp": {
        currentIndex = updatedValue(currentIndex, lineValue[1]);
        break;
      }
      default: {
        console.log("Unknown operation");
        return 0;
      }
    }
  }
  return accumulator;
}

function getEmptyArray() {
  return [];
}
function getAccumulatorBeforeLoopIgnoreBadOperation(input) {
  let accumulator = 0;
  var visited = [];
  let currentIndex = 0;

  let operationIndexChanged = [];
  let canHandle = true;
  let hasOperationChanged = false;

  while (canHandle) {
    if (currentIndex >= input.length) break;

    if (operationIndexChanged.length == input.length) return 0;

    if (visited.includes(currentIndex)) {
      console.log(
        "Not allowed to pass 2 times same instruction. Need to restart",
        currentIndex
      );

      accumulator = 0;
      currentIndex = 0;
      visited = [];
      hasOperationChanged = false;
    } else {
      visited.push(currentIndex);

      var lineValue = input[currentIndex].split(" ");

      if (lineValue.length !== 2) {
        console.log("Unknown line");
        return 0;
      }

      switch (lineValue[0]) {
        case "nop": {
          if (
            !operationIndexChanged.includes(currentIndex) &&
            !hasOperationChanged
          ) {
            operationIndexChanged.push(currentIndex);
            currentIndex = updatedValue(currentIndex, lineValue[1]);
            hasOperationChanged = true;
          } else {
            currentIndex++;
          }

          break;
        }
        case "acc": {
          accumulator = updatedValue(accumulator, lineValue[1]);
          currentIndex++;
          break;
        }
        case "jmp": {
          if (
            !operationIndexChanged.includes(currentIndex) &&
            !hasOperationChanged
          ) {
            operationIndexChanged.push(currentIndex);
            currentIndex++;
            hasOperationChanged = true;
          } else {
            currentIndex = updatedValue(currentIndex, lineValue[1]);
          }

          break;
        }
        default: {
          console.log("Unknown operation");
          return 0;
        }
      }
    }
  }

  return accumulator;
}

module.exports = {
  getAccumulatorBeforeLoop,
  getAccumulatorBeforeLoopIgnoreBadOperation,
};
