function solution(users, emoticons) {
  const MIN_DISCOUNT = 10;
  const MAX_DISCOUNT = 40;
  const DISCOUNT_UNIT = 10;
  const cases = [];
  const combination = (emoticonCount, dicountList) => {
    if (dicountList.length === emoticonCount) return cases.push(dicountList);

    for (let discount = MIN_DISCOUNT; discount <= MAX_DISCOUNT; discount += DISCOUNT_UNIT) {
      combination(emoticonCount, [...dicountList, discount]);
    }
  };
  combination(emoticons.length, []);

  const results = cases.map((discountList) => {
    let total = 0;
    let subscriber = 0;
    for (let i = 0; i < users.length; i++) {
      let cost = 0;
      let isSubscriber = false;
      for (let j = 0; j < emoticons.length; j++) {
        const [discount, limit] = users[i];
        if (discount > discountList[j]) continue;

        const percentage = 1 - discountList[j] / 100;
        cost += emoticons[j] * percentage;
        if (cost >= limit) {
          isSubscriber = true;
          break;
        }
      }

      if (isSubscriber) subscriber += 1;
      else total += cost;
    }

    return [subscriber, total];
  });

  const sortedResults = results.sort((a, b) => {
    if (a[0] === b[0]) return a[1] >= b[1] ? -1 : 1;
    return a[0] > b[0] ? -1 : 1;
  });

  return sortedResults[0];
}
