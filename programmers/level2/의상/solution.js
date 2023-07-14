function solution(clothes) {
  let answer = 1;
  let categories = new Map();

  for (const [name, type] of clothes) {
    if (categories.has(type)) {
      categories.set(type, categories.get(type) + 1);
    } else {
      categories.set(type, 1);
    }
  }

  for (const kind of categories.values()) {
    answer *= kind + 1;
  }

  return answer - 1;
}
