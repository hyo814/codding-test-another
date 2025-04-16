const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let wordCount = 0;

rl.on('line', (line) => {
  input.push(line);
  if (input.length === parseInt(input[0], 10) + 1) {
    rl.close();
  }
});

rl.on('close', () => {
  const words = input.slice(1);

  // 중복 제거
  const uniqueWords = [...new Set(words)];

  // 정렬: 길이순 -> 사전순
  uniqueWords.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    return a.localeCompare(b);
  });

  // 출력
  console.log(uniqueWords.join('\n'));
});
