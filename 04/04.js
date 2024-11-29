const fs = require("fs").promises;

async function readFileAndProcess() {
  try {
    const data = await fs.readFile("network.txt", "utf8");
    const formattedData = JSON.parse(data);
    return formattedData;
  } catch (err) {
    console.error(err);
  }
}

(async () => {
  const formattedData = await readFileAndProcess();

  let safeNodes = [];

  for (let i = 0; i < formattedData.length; i++) {
    const [node1, node2] = formattedData[i];

    const isConflict = safeNodes.some(([n1, n2]) => n1 === node1 || n1 === node2 || n2 === node1 || n2 === node2);

    if (!isConflict) {
      safeNodes.push(formattedData[i]);
    } else {
      safeNodes = safeNodes.filter(([n1, n2]) => n1 !== node1 && n2 !== node1 && n1 !== node2 && n2 !== node2);
    }
  }

  const result = safeNodes.flat(Infinity);

  console.log(`submit ${result.join(",")}`);
})();
