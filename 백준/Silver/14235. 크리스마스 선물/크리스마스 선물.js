const readline = require("readline");

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this._heapifyUp();
    }

    extractMax() {
        if (this.heap.length === 0) return -1;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return max;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let largest = index;

            if (leftChild < length && this.heap[leftChild] > this.heap[largest]) {
                largest = leftChild;
            }
            if (rightChild < length && this.heap[rightChild] > this.heap[largest]) {
                largest = rightChild;
            }
            if (largest === index) break;
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
const maxHeap = new MaxHeap();
const results = [];
let firstInput = true;

rl.on("line", (line) => {
    if (firstInput) {
        n = parseInt(line.trim());
        firstInput = false;
    } else {
        const input = line.trim().split(" ").map(Number);
        const a = input[0];
        
        if (a === 0) {
            results.push(maxHeap.extractMax());
        } else {
            for (let i = 1; i <= a; i++) {
                maxHeap.insert(input[i]);
            }
        }
    }
}).on("close", () => {
    console.log(results.join("\n"));
    process.exit(0);
});
