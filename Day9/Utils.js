function getFirstValueNotSumPrevious(inputArray, preamble) {
  for (let index = preamble; index < inputArray.length; ++index) {
    let array = inputArray.slice(index - preamble, index);
    let isSum = false;

    for (const value1 of array) {
      for (const value2 of array) {
        if (value1 + value2 === inputArray[index]) {
          isSum = true;
          break;
        }
      }
      if (isSum) break;
    }

    if (!isSum) {
      return inputArray[index];
    }
  }
  return 0;
}

function getEncryptionWeakness(inputArray, value) {
  for (let startIndex = 0; startIndex < inputArray.length; startIndex++) {
    let currentIndex = startIndex;
    let sum = 0;
    let values = [];
    while (sum < value) {
      sum += inputArray[currentIndex];
      values.push(inputArray[currentIndex]);
      currentIndex++;
    }

    if (sum === value) {
      values.sort(function (a, b) {
        return b - a;
      });

      return values[0] + values[values.length - 1];
    }
  }

  return 0;
}

module.exports = {
  getFirstValueNotSumPrevious,
  getEncryptionWeakness,
};
