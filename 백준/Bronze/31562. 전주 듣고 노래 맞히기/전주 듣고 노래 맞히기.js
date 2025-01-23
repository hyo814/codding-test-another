// 입력 처리 및 구현
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  // 첫 번째 줄에서 N, M 추출
  const [N, M] = input[0].split(" ").map(Number);

  const songs = new Map();

  // N개의 노래 정보 처리
  for (let i = 1; i <= N; i++) {
    const [T, title, ...notes] = input[i].split(" ");
    const firstThreeNotes = notes.slice(0, 3).join("");
    
    if (!songs.has(firstThreeNotes)) {
      songs.set(firstThreeNotes, []);
    }
    songs.get(firstThreeNotes).push(title);
  }

  const results = [];

  // M개의 시도 처리
  for (let i = N + 1; i < N + 1 + M; i++) {
    const attempt = input[i].split(" ").join("");

    if (songs.has(attempt)) {
      const matchedTitles = songs.get(attempt);

      if (matchedTitles.length === 1) {
        results.push(matchedTitles[0]);
      } else {
        results.push("?");
      }
    } else {
      results.push("!");
    }
  }

  // 결과 출력
  console.log(results.join("\n"));
});
