const fs = require('fs');

// 입력을 처리하는 함수
function processInput(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0], 10);
    const extensionCount = {};

    for (let i = 1; i <= n; i++) {
        const fileName = lines[i].trim();
        const extension = fileName.split('.').pop();

        if (extensionCount[extension]) {
            extensionCount[extension]++;
        } else {
            extensionCount[extension] = 1;
        }
    }

    // 확장자를 사전순으로 정렬
    const sortedExtensions = Object.keys(extensionCount).sort();
    
    // 출력
    sortedExtensions.forEach(ext => {
        console.log(`${ext} ${extensionCount[ext]}`);
    });
}

// 표준 입력을 처리
let inputData = '';
process.stdin.on('data', chunk => {
    inputData += chunk;
});

process.stdin.on('end', () => {
    processInput(inputData);
});
