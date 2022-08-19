function solution(clothes) {
  var answer = 1;
  const categories = new Map();

  // 1. 옷의 가짓수를 구한다.
  for (let [name, type] of clothes) {
    if (categories.has(type)) {
      categories.set(type, categories.get(type) + 1);
    } else {
      categories.set(type, 1);
    }
  }

  // 2. 옷의 매칭 가능 조합의 수를 구한다.
  for (let value of categories.values()) {
    const caseCount = value + 1; // 아무것도 선택하지 않는 경우의 수 추가
    answer *= caseCount;
  }
  answer -= 1; // 최소 1개는 입어야하니, 아무것도 안입은 경우의 수 1개 빼기

  return answer;
}
