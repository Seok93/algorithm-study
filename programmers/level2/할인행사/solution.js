function solution(want, number, discount) {
  let answer = 0;

  const needs = want.reduce((obj, product, index) => {
    obj[product] = number[index];
    return obj;
  }, {});

  const count = number.reduce((acc, num) => (acc += num));
  for (let i = 0; i < discount.length; i++) {
    const lists = discount.slice(i, i + count).reduce((obj, product) => {
      obj[product] = (obj[product] || 0) + 1;
      return obj;
    }, {});

    let isEquals = true;
    for (const [key, value] of Object.entries(needs)) {
      if (lists[key] !== value) {
        isEquals = false;
        break;
      }
    }

    if (isEquals) answer++;
  }

  return answer;
}
