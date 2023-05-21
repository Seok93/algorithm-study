function solution(today, terms, privacies) {
  const answer = [];
  const contracts = new Map();

  terms.forEach((term) => {
    const [type, period] = term.split(' ');
    contracts.set(type, Number(period));
  });

  privacies.forEach((private, index) => {
    const [date, type] = private.split(' ');
    let [year, month, day] = date.split('.').map((elem) => Number(elem));
    const period = contracts.get(type);

    month += period;
    if (--day === 0) {
      month -= 1;
      day = 28;
    }

    year += Math.floor(month / 12);
    month = month % 12;
    if (month === 0) {
      year -= 1;
      month = 12;
    }

    const current = new Date(today);
    const expriation = new Date([year, month, day].join('.'));

    current > expriation && answer.push(index + 1);
  });

  return answer;
}
