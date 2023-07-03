function solution(k, tangerine) {
  let answer = 0;
  const sizeMap = {};

  tangerine.forEach((size) => (sizeMap[size] = (sizeMap[size] || 0) + 1));

  let total = 0;
  for (const value of Object.values(sizeMap).sort((a, b) => b - a)) {
    total += value;
    answer++;
    if (total >= k) break;
  }

  return answer;
}
