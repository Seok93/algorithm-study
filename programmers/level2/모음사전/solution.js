function solution(word) {
  const ALPHA = ['A', 'E', 'I', 'O', 'U'];

  const dict = [];
  const dfs = (alpha, word) => {
    if (word.length >= 5) return;
    for (let i = 0; i < alpha.length; i++) {
      const next = word + alpha[i];
      dict.push(next);
      dfs(alpha, next);
    }
  };
  dfs(ALPHA, '');

  return dict.indexOf(word) + 1;
}
