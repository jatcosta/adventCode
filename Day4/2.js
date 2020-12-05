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
  let hasAllRequiredFields =
    passport.byr !== null &&
    passport.iyr !== null &&
    passport.eyr !== null &&
    passport.hgt !== null &&
    passport.hcl !== null &&
    passport.ecl !== null &&
    passport.pid !== null;
  if (!hasAllRequiredFields) return false;

  // byr
  if (passport.byr.length !== 4) return false;
  let byrInt = parseInt(passport.byr, 10);
  if (byrInt < 1920 || byrInt > 2002) return false;

  // iyr
  if (passport.iyr.length !== 4) return false;
  let iyrInt = parseInt(passport.iyr, 10);
  if (iyrInt < 2010 || iyrInt > 2020) return false;

  // eyr
  if (passport.eyr.length !== 4) return false;
  let eyrInt = parseInt(passport.eyr, 10);
  if (eyrInt < 2020 || eyrInt > 2030) return false;

  //hgt
  var heightType = passport.hgt.slice(-2);
  var heightValue = parseInt(passport.hgt.slice(0, -2), 10);

  switch (heightType) {
    case "cm": {
      if (heightValue < 150 || heightValue > 193) return false;
      break;
    }
    case "in": {
      if (heightValue < 59 || heightValue > 76) return false;
      break;
    }
    default:
      console.log(`Unknown Height Type ${heightType}.`);
      return false;
  }

  //hcl
  var hairColorRegex = new RegExp("^#[0-9a-f]{6}$");
  if (!hairColorRegex.test(passport.hcl)) return false;

  //ecl
  var eyeColorRegex = new RegExp("^(amb|blu|brn|gry|grn|hzl|oth)$");
  if (!eyeColorRegex.test(passport.ecl)) return false;

  //pid
  var pidRegex = new RegExp("^[0-9]{9}$");
  if (!pidRegex.test(passport.pid)) return false;

  return true;
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
