const fs = require("fs").promises;

async function readFileAndProcess() {
  try {
    const data = await fs.readFile("log.txt", "utf8");
    const formattedData = data.split("\n");
    return formattedData;
  } catch (err) {
    console.error(err);
  }
}

(async () => {
  const formattedData = await readFileAndProcess();
  let validAttempts = 0;
  let invalidAttempts = 0;

  for (const attempt of formattedData) {
    if (validateString(attempt)) {
      validAttempts++;
    } else {
      invalidAttempts++;
    }
  }

  console.log(`submit ${validAttempts}true${invalidAttempts}false`);
})();

function isDigit(char) {
  return /^[0-9]$/.test(char);
}

function isLowercaseLetter(char) {
  return /^[a-z]$/.test(char);
}

function validateString(input) {
  let seenLetter = false;
  let prevLetter = "";
  let prevDigit = -1;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (isDigit(char)) {
      const currentDigit = parseInt(char);
      if (seenLetter || currentDigit < prevDigit) {
        return false;
      }
      prevDigit = currentDigit;
    } else if (isLowercaseLetter(char)) {
      if (seenLetter && char < prevLetter) {
        return false;
      }
      prevLetter = char;
      seenLetter = true;
    } else {
      return false;
    }
  }

  return true;
}
