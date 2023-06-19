function solution(n, m, section) {
  let answer = 0;
  while (section.length > 0) {
    const painted = section[0] + m - 1;
    while (section[0] <= painted) section.shift();
    answer++;
  }
  return answer;
}
