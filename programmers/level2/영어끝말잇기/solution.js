function solution(n, words) {
  const result = [0, 0];
  const wordSet = new Set();

  words.some((word, idx, origin) => {
    const prev = origin[idx - 1];
    const endChar = prev ? prev[prev.length - 1] : word[0];

    if (wordSet.has(word) || word.length < 2 || word[0] !== endChar) {
      result[0] = (idx % n) + 1;
      result[1] = Math.floor(idx / n) + 1;
      return true;
    }
    wordSet.add(word);
    return false;
  });

  return result;
}
