const assert = require("assert");
const chai = require("chai");
const path = require("path");

var Utils = require("./Utils");
describe("Day6", function () {
  describe("getArrayAnswersGroup", function () {
    it("should return the expected answers groups", function () {
      var lines = require("fs")
        .readFileSync(path.resolve(__dirname, "testInput.txt"), "utf-8")
        .split("\n");

      let expectedAnswers = [
        new Set(["a", "b", "c"]),
        new Set(["a", "b", "c"]),
        new Set(["a", "b", "c"]),
        new Set(["a"]),
        new Set(["b"]),
      ];

      let unexpectedAnswers = [
        new Set(["a", "b", "c"]),
        new Set(["a", "b"]),
        new Set(["a", "b", "c"]),
        new Set(["a"]),
        new Set(["b"]),
      ];

      let answersGroup = Utils.getArrayAnswersGroup(lines);

      chai.expect(answersGroup).to.deep.equal(expectedAnswers);

      chai.expect(answersGroup).to.not.equal(unexpectedAnswers);
    });
  });

  describe("getSumAnswersGroup", function () {
    it("should return the expected sum of all answers groups", function () {
      var lines = require("fs")
        .readFileSync(path.resolve(__dirname, "testInput.txt"), "utf-8")
        .split("\n");

      let sum = Utils.getSumAnswersGroup(lines);

      chai.expect(sum).to.equal(11, "Invalid sum size");
    });
  });

  describe("getIntersection", function () {
    it("should return the intersection of multiple sets", function () {
      let testAB = [
        new Set(["a", "b", "c"]),
        new Set(["a", "b", "e"]),
        new Set(["a", "b"]),
      ];

      let testABExpectedResult = ["a", "b"];
      let testABResult = Utils.getIntersection(testAB);
      chai
        .expect(testABExpectedResult)
        .to.deep.equal(testABResult, "invalid testABResult");

      let testA = [
        new Set(["a", "b", "c"]),
        new Set(["a", "d", "e"]),
        new Set(["a"]),
      ];

      let testAExpectedResult = ["a"];
      let testAResult = Utils.getIntersection(testA);
      chai
        .expect(testAExpectedResult)
        .to.deep.equal(testAResult, "invalid testAResult");

      let testNone = [
        new Set(["a", "b", "c"]),
        new Set(["e", "d", "n"]),
        new Set(["g"]),
      ];

      let testNoneExpectedResult = [];
      let testNoneResult = Utils.getIntersection(testNone);
      chai
        .expect(testNoneExpectedResult)
        .to.deep.equal(testNoneResult, "invalid testNoneResult");
    });
  });

  describe("getArrayAnswersGroupAllYes", function () {
    it("should return the expected answers groups", function () {
      var lines = require("fs")
        .readFileSync(path.resolve(__dirname, "testInput.txt"), "utf-8")
        .split("\n");

      let expectedAnswers = [["a", "b", "c"], [], ["a"], ["a"], ["b"]];

      let answersGroupAllYes = Utils.getArrayAnswersGroupAllYes(lines);

      chai.expect(answersGroupAllYes).to.deep.equal(expectedAnswers);
    });
  });

  describe("getSumAnswersGroupAllYes", function () {
    it("should return the expected sum of all answers groups all yes", function () {
      var lines = require("fs")
        .readFileSync(path.resolve(__dirname, "testInput.txt"), "utf-8")
        .split("\n");

      let sum = Utils.getSumAnswersGroupAllYes(lines);

      chai.expect(sum).to.equal(6, "Invalid sum size");
    });
  });
});
