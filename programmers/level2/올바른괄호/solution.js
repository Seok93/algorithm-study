function solution(s) {
  let size = 0;

  if (s.length % 2 !== 0) return false;

  for (let i = 0; i < s.length; i++) {
    s[i] === '(' ? (size += 1) : (size -= 1);
    if (size < 0) return false;
  }

  return size === 0;
}
