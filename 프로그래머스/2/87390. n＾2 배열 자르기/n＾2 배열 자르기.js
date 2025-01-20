function solution(n, left, right) {
    const result = [];

    for (let i = left; i <= right; i++) {
        // 각 인덱스에서의 값은 Math.max(행, 열) + 1로 계산
        result.push(Math.max(Math.floor(i / n), i % n) + 1);
    }

    return result;
}
