const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = parseInt(input[0]);
  const xMap = new Map();
  const yMap = new Map();

  for (let i = 1; i <= n; i++) {
    const [x, y] = input[i].split(" ").map(Number);

    xMap.set(x, (xMap.get(x) || 0) + 1);
    yMap.set(y, (yMap.get(y) || 0) + 1);
  }

  let count = 0;

  for (const v of xMap.values()) {
    if (v >= 2) count++;
  }

  for (const v of yMap.values()) {
    if (v >= 2) count++;
  }

  console.log(count);
});
