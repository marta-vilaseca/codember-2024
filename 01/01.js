const decrypt = (digit, string) => {
  const result = digit.split("").map(Number);
  let position = result[0];

  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "R":
        position = (position + 1) % digit.length; // Wraps around correctly
        break;
      case "L":
        position = (position - 1 + digit.length) % digit.length; // Ensures positive wrap-around
        break;
      case "U":
        result[position] = result[position] === 9 ? 0 : result[position] + 1; // Increase value, except for 9 which turns into 0
        break;
      case "D":
        result[position] = result[position] === 0 ? 9 : result[position] - 1; // Decrease value, except for 0 which turns into 9
        break;
    }
    // console.log(`Position: ${position}, Result at Position: ${result[position]}`);
  }

  return "submit " + result.join("");
};

console.log(decrypt("528934712834", "URDURUDRUDLLLLUUDDUDUDUDLLRRRR"));
