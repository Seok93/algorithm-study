function solution(brown, yellow) {
  const cases = [];
  const size = brown + yellow;

  for (let i = 2; i <= size / 2; i++) {
    if (size % i === 0) cases.push([i, size / i]);
  }

  return cases
    .filter(([width, height]) => width >= height)
    .find(([width, height]) => {
      if ((width - 2) * (height - 2) === yellow) return true;
      else return false;
    });
}
