// 모듈 import (필요시 파일 입출력에 사용)
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [N, M] = input[0].split(" ").map(Number); // 첫 줄 입력: N(수업 수), M(최소 수업 수)
  const studentCount = new Map(); // 학생별 수업 참여 횟수를 저장할 Map

  let index = 1; // 현재 입력 라인 인덱스

  for (let i = 0; i < N; i++) {
    const Ki = Number(input[index]); // i번째 수업의 학생 수
    const students = input[index + 1].split(" "); // i번째 수업의 학생 목록

    // 학생 학번별 수업 참여 횟수 업데이트
    students.forEach((student) => {
      studentCount.set(student, (studentCount.get(student) || 0) + 1);
    });

    index += 2; // 다음 수업으로 이동
  }

  // M개 이상의 수업을 들은 학생 수 계산
  const result = Array.from(studentCount.values()).filter((count) => count >= M).length;

  console.log(result); // 결과 출력
});
