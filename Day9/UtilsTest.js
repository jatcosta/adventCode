const assert = require("assert");
const chai = require("chai");
const path = require("path");

var Utils = require("./Utils");

describe("Day9", function () {
  describe("getFirstValueNotSumPrevious", function () {
    it("should return the first value with the sum don't match", function () {
      var lines = require("fs")
        .readFileSync(path.resolve(__dirname, "testInput.txt"), "utf-8")
        .split("\n")
        .filter(Boolean);

      let input = [];
      for (const [i, v] of lines.entries()) {
        if (v.length !== 0) {
          input.push(parseInt(v, 10));
        }
      }

      let expectedValue = Utils.getFirstValueNotSumPrevious(input, 5);

      chai.expect(expectedValue).to.equal(127, "Invalid value");
    });
  });

  describe("getEncryptionWeakness", function () {
    it("should return the sum of the first and last from value with the sum of elemental match value", function () {
      var lines = require("fs")
        .readFileSync(path.resolve(__dirname, "testInput.txt"), "utf-8")
        .split("\n")
        .filter(Boolean);

      let input = [];
      for (const [i, v] of lines.entries()) {
        if (v.length !== 0) {
          input.push(parseInt(v, 10));
        }
      }

      let expectedValue = Utils.getEncryptionWeakness(input, 127);

      chai.expect(expectedValue).to.equal(62, "Invalid value");
    });
  });
});
