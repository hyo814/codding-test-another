const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', line => {
  input.push(line.trim());
}).on('close', () => {
  const [N, M] = input[0].split(' ').map(Number);
  const A = input.slice(1, 1 + N).map(Number);
  const queries = input.slice(1 + N).map(Number);

  // Step 1: Sort the array A to get B
  const B = [...A].sort((a, b) => a - b);

  // Step 2: Record the first occurrence of each value in B
  const indexMap = new Map();
  for (let i = 0; i < B.length; i++) {
    if (!indexMap.has(B[i])) {
      indexMap.set(B[i], i);
    }
  }

  // Step 3: Answer each query using the map
  const results = queries.map(d => indexMap.has(d) ? indexMap.get(d) : -1);
  console.log(results.join('\n'));
});
