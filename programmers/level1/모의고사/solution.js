function solution(answers) {
  const result = [];
  const scores = [0, 0, 0];
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  answers.forEach((answer, i) => {
    patterns.forEach((pattern, j) => {
      const selection = pattern[i % pattern.length];
      if (answer === selection) scores[j] += 1;
    });
  });

  const max = Math.max(...scores);
  scores.forEach((score, idx) => score === max && result.push(idx + 1));

  return result;
}
