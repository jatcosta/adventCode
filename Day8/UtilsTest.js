const assert = require("assert");
const chai = require("chai");
const path = require("path");

var Utils = require("./Utils");

describe("Day7", function () {
  describe("getAccumulatorBeforeLoop", function () {
    it("should return the expected accumulator value", function () {
      var lines = require("fs")
        .readFileSync(path.resolve(__dirname, "testInput.txt"), "utf-8")
        .split("\n");

      let expectedValue = Utils.getAccumulatorBeforeLoop(lines);

      chai.expect(expectedValue).to.equal(5, "Invalid accumulator value");
    });
  });

  describe("getAccumulatorBeforeLoopIgnoreBadOperation", function () {
    it("should return the expected accumulator value", function () {
      var lines = require("fs")
        .readFileSync(path.resolve(__dirname, "testInput.txt"), "utf-8")
        .split("\n");

      let expectedValue = Utils.getAccumulatorBeforeLoopIgnoreBadOperation(
        lines
      );
      chai.expect(expectedValue).to.equal(8, "Invalid accumulator value");
    });
  });
});
