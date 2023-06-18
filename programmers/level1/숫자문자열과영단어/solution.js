function solution(s) {
  const NUMBER_SET = Object.freeze({
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  });
  let answer = '';
  let buffer = '';

  [...s].forEach((c) => {
    const regex = /\d/;
    if (regex.test(c)) {
      answer += c;
    } else {
      buffer += c;
      if (buffer in NUMBER_SET) {
        answer += NUMBER_SET[buffer];
        buffer = '';
      }
    }
  });

  return Number(answer);
}
