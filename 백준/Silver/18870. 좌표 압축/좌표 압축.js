const fs = require('fs');

function coordinateCompression(n, arr) {
    // 중복 제거 후 정렬하여 압축된 좌표 리스트 생성
    const sortedUnique = [...new Set(arr)].sort((a, b) => a - b);
    
    // 각 숫자의 압축된 값을 매핑
    const indexMap = new Map();
    sortedUnique.forEach((value, index) => {
        indexMap.set(value, index);
    });
    
    // 원래 배열의 좌표를 압축된 값으로 변환
    return arr.map(value => indexMap.get(value));
}

// 입력 처리
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);

// 결과 출력
console.log(coordinateCompression(n, arr).join(' '));
