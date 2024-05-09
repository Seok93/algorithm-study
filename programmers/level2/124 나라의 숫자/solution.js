function solution(n) {
  let answer = '';
  const numbers = [4, 1, 2];

  while (n) {
    const remainder = n % numbers.length;
    answer = numbers[remainder] + answer;

    n = Math.floor(n / 3);
    if (remainder === 0) n -= 1;
  }
  return answer;
}
