function solution(sizes) {
  const long = [];
  const short = [];

  sizes.forEach((size) => {
    long.push(Math.max(...size));
    short.push(Math.min(...size));
  });

  return Math.max(...long) * Math.max(...short);
}
