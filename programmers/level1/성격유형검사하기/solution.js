function solution(survey, choices) {
  const PAIRS = Object.freeze(['RT', 'CF', 'JM', 'AN']);
  const SURVEY_SCORES = Object.freeze({
    1: 'F3',
    2: 'F2',
    3: 'F1',
    4: 'N0',
    5: 'B1',
    6: 'B2',
    7: 'B3',
  });
  const mbti = {};

  PAIRS.forEach((pair) => {
    [...pair].forEach((type) => (mbti[type] = 0));
  });

  survey.forEach((types, index) => {
    const [front, back] = types;
    const [target, score] = SURVEY_SCORES[choices[index]];
    switch (target) {
      case 'F':
        mbti[front] += Number(score);
        break;
      case 'B':
        mbti[back] += Number(score);
        break;
    }
  });

  return PAIRS.map(([front, back]) => (mbti[front] >= mbti[back] ? front : back)).join('');
}
