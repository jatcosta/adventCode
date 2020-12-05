const { type } = require("os");
const { exit } = require("process");

var lines = require("fs").readFileSync("input.txt", "utf-8").split("\n");

function getNewEmptyPassport() {
  return {
    byr: null,
    iyr: null,
    eyr: null,
    hgt: null,
    hcl: null,
    ecl: null,
    pid: null,
    cid: null,
  };
}

function isPassportValid(passport) {
  return (
    passport.byr !== null &&
    passport.iyr !== null &&
    passport.eyr !== null &&
    passport.hgt !== null &&
    passport.hcl !== null &&
    passport.ecl !== null &&
    passport.pid !== null
  );
}

function getPassportVectorFromFile() {
  let currentPassportVector = [];

  let currentPassport = getNewEmptyPassport();

  for (const [i, v] of lines.entries()) {
    if (v.length == 0) {
      let data = currentPassport;
      currentPassportVector.push(data);

      currentPassport = getNewEmptyPassport();
    } else {
      let keyValues = v.split(" ");

      for (const keyValue of keyValues) {
        let data = keyValue.split(":");

        currentPassport[data[0]] = data[1];
      }
    }
  }
  return currentPassportVector;
}

function getNumberValidPassports(passportVector) {
  let validPassports = 0;

  for (const passport of passportVector) {
    if (isPassportValid(passport)) {
      validPassports++;
    }
  }
  return validPassports;
}

let passportVector = getPassportVectorFromFile();
let validPassports = getNumberValidPassports(passportVector);

console.log("Valid passports : ", validPassports);
