function solution(number, limit, power) {
  const steels = [];

  for (let i = 1; i <= number; i++) {
    const divisors = new Set();
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        divisors.add(j);
        divisors.add(i / j);
      }
    }
    divisors.size > limit ? steels.push(power) : steels.push(divisors.size);
  }

  return steels.reduce((sum, steel) => sum + steel, 0);
}
