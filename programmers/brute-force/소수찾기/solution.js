function isPrime(num) {
  const sqrt = Math.floor(Math.sqrt(num));

  if (num <= 1) return false;

  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}

function dfs(prev, numbers, visited, primes) {
  visited.forEach((visit, index) => {
    if (!visit) {
      visited[index] = 1;
      const current = prev + numbers[index];
      const number = parseInt(current, 10);

      // 만들어진 숫자가 소수인지 확인
      isPrime(number) && primes.add(number);
      dfs(current, numbers, visited, primes);
      visited[index] = 0;
    }
  });
}

function solution(numbers) {
  const primes = new Set();
  const visited = [...numbers].fill(0);

  // 주어진 숫자 내에서 가능한 모든 숫자의 조합 구하기
  dfs('', [...numbers], visited, primes);

  return primes.size;
}
