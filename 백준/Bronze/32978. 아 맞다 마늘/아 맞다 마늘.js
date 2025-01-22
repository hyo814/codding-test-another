// Node.js를 이용하여 문제 해결

// readline 모듈을 사용하여 입력 처리
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  // 입력 데이터 처리
  const N = parseInt(input[0]); // 재료의 개수
  const allIngredients = input[1].split(" "); // 모든 재료 목록
  const usedIngredients = input[2].split(" "); // 사용된 재료 목록

  // 재료 목록을 Set으로 변환
  const usedSet = new Set(usedIngredients);

  // 누락된 재료 찾기
  const missingIngredient = allIngredients.find((ingredient) => !usedSet.has(ingredient));

  // 결과 출력
  console.log(missingIngredient);

  process.exit();
});