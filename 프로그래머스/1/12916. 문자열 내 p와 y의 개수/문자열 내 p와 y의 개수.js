function solution(s) {
    s = s.toLowerCase(); // 대소문자를 구별하지 않기 위해 모두 소문자로 변환
    const pCount = (s.match(/p/g) || []).length; // 'p'의 개수를 셈
    const yCount = (s.match(/y/g) || []).length; // 'y'의 개수를 셈
    return pCount === yCount; // 두 개수가 같으면 true, 다르면 false 반환
}
