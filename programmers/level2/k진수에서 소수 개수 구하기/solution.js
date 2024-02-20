function solution(n, k) {
  const primeCache = [];
  const validatePrimeNumber = (number) => {
    if (number < 2) return false;
    if (primeCache.includes(number)) return true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    primeCache.push(number);
    return true;
  };

  return n
    .toString(k)
    .split(/0+/)
    .filter((number) => validatePrimeNumber(number)).length;
}
