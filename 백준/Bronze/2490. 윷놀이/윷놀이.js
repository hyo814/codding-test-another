const fs = require('fs');

const input = fs
        .readFileSync('./dev/stdin')
        .toString()
        .trim()
        .split('\n')
        .map((v) => v.split(' ').reduce((r, v) => r + Number(v), 0));


const answer = [];
const print = ['D', 'C', 'B', 'A', 'E'];


for (let i = 0; i < input.length; i++) {
        answer.push(print[input[i]]);
}
console.log(answer.join('\n'));