function solution(numbers) {
    // 배열의 총합을 계산
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    
    // 평균값 계산
    const average = sum / numbers.length;
    
    return average;
}
