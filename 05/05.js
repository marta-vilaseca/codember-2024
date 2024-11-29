const fs = require("fs").promises;

async function readFileAndProcess() {
  try {
    const data = await fs.readFile("spoiler.txt", "utf8");
    const formattedData = data.split(",");
    return formattedData;
  } catch (err) {
    console.error(err);
  }
}

(async () => {
  const formattedData = await readFileAndProcess();
  let candidates = [];
  let result;

  for (let i = 0; i < formattedData.length; i++) {
    if (processNum(formattedData[i])) {
      candidates.push(formattedData[i]);
    }
  }
  result = candidates[2];
  console.log(`submit ${candidates.length}-${result}`);
})();

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const processNum = (number) => {
  let num = parseInt(number);

  if (!isPrime(num)) {
    return false;
  } else {
    num = Array.from(String(num), Number).reduce((sum, digit) => sum + digit, 0);
  }

  return isPrime(num);
};
