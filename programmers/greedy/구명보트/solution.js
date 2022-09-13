function solution(people, limit) {
  let answer = 0;

  // 1. 가벼운 순서대로
  people.sort((a, b) => a - b);

  // 2. 사람이 모두 구출 될 때까지
  let i = 0;
  while (people.length > i) {
    const biggest = people.pop();
    if (people[i] + biggest <= limit) i++;
    answer++;
  }

  return answer;
}
