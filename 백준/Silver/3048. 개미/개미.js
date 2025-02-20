const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const [N1, N2] = input[0].split(" ").map(Number);
  let firstGroup = input[1].split("").reverse();
  let secondGroup = input[2].split("");
  const T = Number(input[3]);

  let ants = [...firstGroup, ...secondGroup];
  let directions = new Array(N1).fill(1).concat(new Array(N2).fill(-1));

  for (let t = 0; t < T; t++) {
    let newPositions = [...ants];
    for (let i = 0; i < ants.length - 1; i++) {
      if (directions[i] === 1 && directions[i + 1] === -1) {
        [newPositions[i], newPositions[i + 1]] = [newPositions[i + 1], newPositions[i]];
        [directions[i], directions[i + 1]] = [directions[i + 1], directions[i]];
        i++; 
      }
    }
    ants = newPositions;
  }

  console.log(ants.join(""));
});
