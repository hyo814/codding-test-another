const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputLines = [];
rl.on('line', function (line) {
  inputLines.push(line.trim());
}).on('close', function () {
  const [N, T] = inputLines[0].split(' ').map(Number);
  const buses = inputLines.slice(1).map(line => {
    const [S, I, C] = line.split(' ').map(Number);
    return { S, I, C };
  });

  let minWait = Number.MAX_SAFE_INTEGER;

  buses.forEach(({ S, I, C }) => {
    for (let j = 0; j < C; j++) {
      const departure = S + j * I;
      if (departure >= T) {
        minWait = Math.min(minWait, departure - T);
        break; // 더 늦은 버스는 더 기다리므로 더 볼 필요 없음
      }
    }
  });

  console.log(minWait === Number.MAX_SAFE_INTEGER ? -1 : minWait);
});
