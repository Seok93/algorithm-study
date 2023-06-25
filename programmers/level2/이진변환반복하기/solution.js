function solution(s) {
  let transform = 0;
  let zero = 0;

  while (s.length > 1) {
    const ns = s
      .split('')
      .filter((c) => c > 0)
      .join('');
    zero += s.length - ns.length;
    transform += 1;
    s = ns.length.toString(2);
  }

  return [transform, zero];
}
