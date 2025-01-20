function solution(arr, divisor) {
    // divisor로 나누어 떨어지는 값 필터링
    const filtered = arr.filter(num => num % divisor === 0);

    // 필터링 결과가 비어 있다면 -1 반환
    if (filtered.length === 0) return [-1];

    // 오름차순 정렬하여 반환
    return filtered.sort((a, b) => a - b);
}
