const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line.trim());
}).on('close', () => {
  const n = parseInt(lines[0]);
  const filenames = lines.slice(1);

  const length = filenames[0].length;
  let pattern = '';

  for (let i = 0; i < length; i++) {
    const charSet = new Set();
    for (let j = 0; j < n; j++) {
      charSet.add(filenames[j][i]);
    }

    if (charSet.size === 1) {
      pattern += filenames[0][i]; // 공통 문자
    } else {
      pattern += '?'; // 서로 다르면 ?로 대체
    }
  }

  console.log(pattern);
});
