function solution(orders, course) {
  let answer = [];

  function findCourse(store, list, len, map) {
    for (let i = 0; i < list.length; i++) {
      store.push(list[i]);
      if (store.length >= len) {
        const coure = store.join('');
        map.set(coure, (map.get(coure) || 0) + 1);
      } else {
        findCourse(store, list.slice(i + 1), len, map);
      }
      store.pop();
    }
  }

  orders = orders.map((order) => [...order].sort().join(''));

  course.forEach((len) => {
    const target = orders.filter((order) => order.length >= len);

    if (target.length === 0) return;

    const courseMap = new Map();
    target.forEach((order) => {
      const store = [];
      findCourse(store, order, len, courseMap);
    });

    const filteredCourse = [...courseMap].filter((course) => course[1] >= 2);

    if (filteredCourse.length === 0) return;

    const max = Math.max(...filteredCourse.map((course) => course[1]));
    const course = filteredCourse.filter((course) => course[1] === max).map((course) => course[0]);
    answer = [...answer, ...course];
  });

  return answer.sort((a, b) => (a > b ? 1 : -1));
}
