const fs = require("fs").promises;

async function readFileAndProcess() {
  try {
    const data = await fs.readFile("trace.txt", "utf8");
    const formattedData = data.split("\n");
    return formattedData;
  } catch (err) {
    console.error(err);
  }
}

(async () => {
  const formattedData = await readFileAndProcess();
  let totalSum = 0;
  let lastLineSteps = 0;

  for (let i = 0; i < formattedData.length; i++) {
    const steps = processLine(formattedData[i]);
    totalSum += steps;
    if (i === formattedData.length - 1) {
      lastLineSteps = steps;
    }
  }

  console.log(`submit ${totalSum}-${lastLineSteps}`);
})();

const processLine = (string) => {
  const values = string.split(" ").map(Number);
  let steps = 0;
  let position = 0;

  while (position >= 0 && position < values.length) {
    steps++;
    const jump = values[position];
    values[position] += 1; // Increment the current instruction
    position += jump; // Move to the next position based on the jump
  }

  return steps; // Return the number of steps it took to escape
};
