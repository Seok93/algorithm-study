function solution(k, m, score) {
  let benefit = 0;
  let scoreIndex = 0;
  score.sort((a, b) => b - a);
  while (score.length >= scoreIndex + m) {
    const box = score.slice(scoreIndex, scoreIndex + m);
    benefit += box[box.length - 1] * m;
    scoreIndex += m;
  }
  return benefit;
}
