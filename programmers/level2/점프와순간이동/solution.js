function solution(n) {
  let bettery = 0;

  while (n > 0) {
    bettery += n % 2;
    n = Math.floor(n / 2);
  }

  return bettery;
}
