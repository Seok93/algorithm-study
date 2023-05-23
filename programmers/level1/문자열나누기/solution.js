function solution(s) {
  let answer = 0;
  let target = '';
  let word = '';

  for (const c of s) {
    if (!target) target = c;
    word += c;

    const sameCount = [...word].filter((elem) => target === elem).length;
    const otherCount = [...word].filter((elem) => target !== elem).length;
    if (sameCount === otherCount) {
      target = '';
      word = '';
      answer++;
    }
  }

  return word ? ++answer : answer;
}
