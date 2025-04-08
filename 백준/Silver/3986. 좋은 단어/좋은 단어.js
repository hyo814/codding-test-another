const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
let count = 0;

for (let i = 1; i <= N; i++) {
  const word = input[i];
  const stack = [];

  for (const char of word) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop(); // 같은 글자면 짝이 되므로 제거
    } else {
      stack.push(char); // 스택에 추가
    }
  }

  if (stack.length === 0) {
    count++; // 스택이 비어있으면 좋은 단어
  }
}

console.log(count);
