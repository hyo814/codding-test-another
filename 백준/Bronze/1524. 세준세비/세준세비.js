const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  solve(input);
  process.exit(0);
});

function solve(input) {
  let index = 0;
  const T = parseInt(input[index++], 10);
  let results = [];

  for (let t = 0; t < T; t++) {
    if (input[index] === "") index++; // 줄바꿈 처리
    const [N, M] = input[index++].split(" ").map(Number);
    const sejunArmy = input[index++].split(" ").map(Number);
    const sebiArmy = input[index++].split(" ").map(Number);
    
    // 가장 강한 병사 찾기
    const maxSejun = Math.max(...sejunArmy);
    const maxSebi = Math.max(...sebiArmy);
    
    if (maxSejun >= maxSebi) {
      results.push("S");
    } else {
      results.push("B");
    }
  }
  
  console.log(results.join("\n"));
}