function getArrayAnswersGroup(input) {
  let answersGroup = [];
  let currentAnswers = new Set();

  for (const [i, v] of input.entries()) {
    if (v.length == 0) {
      if (currentAnswers.size != 0) {
        answersGroup.push(currentAnswers);
        currentAnswers = new Set();
      }
    } else {
      for (let char of v) {
        currentAnswers.add(char);
      }
    }
  }
  if (currentAnswers.size != 0) {
    answersGroup.push(currentAnswers);
  }
  return answersGroup;
}

function getSumAnswersGroup(input) {
  let sum = 0;
  let answersGroup = getArrayAnswersGroup(input);

  for (let answer of answersGroup) {
    sum += answer.size;
  }
  return sum;
}

function getIntersection(groupSets) {
  let intersection = [];

  for (const [i, v] of groupSets.entries()) {
    if (i === 0) {
      intersection = [...v];
    } else {
      intersection = intersection.filter((x) => v.has(x));
    }
  }

  return intersection;
}

function getArrayAnswersGroupAllYes(input) {
  let answersGroup = [];
  let groupSet = [];

  for (const [i, v] of input.entries()) {
    if (v.length == 0) {
      if (groupSet.length != 0) {
        answersGroup.push(getIntersection(groupSet));
        groupSet = [];
      }
    } else {
      let current = new Set();
      for (let char of v) {
        current.add(char);
      }
      groupSet.push(current);
    }
  }

  if (groupSet.length != 0) {
    answersGroup.push(getIntersection(groupSet));
  }
  return answersGroup;
}

function getSumAnswersGroupAllYes(input) {
  let sum = 0;
  let answersGroup = getArrayAnswersGroupAllYes(input);

  for (let answer of answersGroup) {
    sum += answer.length;
  }
  return sum;
}
module.exports = {
  getArrayAnswersGroup,
  getSumAnswersGroup,
  getIntersection,
  getArrayAnswersGroupAllYes,
  getSumAnswersGroupAllYes
};
