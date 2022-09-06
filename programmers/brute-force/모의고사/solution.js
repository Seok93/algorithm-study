function score(pattern, answers) {
  let score = 0;
  answers.forEach((answer, index) => {
    if (pattern[index % pattern.length] === answer) {
      score += 1;
    }
  });
  return score;
}

function solution(answers) {
  const answer = [];
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const scores = patterns.map((pattern) => score(pattern, answers));
  const maxScore = Math.max(...scores);

  scores.forEach((score, idx) => {
    if (maxScore === score) {
      answer.push(idx + 1);
    }
  });

  return answer;
}
