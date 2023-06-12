function solution(foods) {
  let answer = '';

  foods.forEach((food, index) => {
    const count = Math.floor(food / 2);
    answer += index.toString().repeat(count);
  });

  return answer + '0' + [...answer].reverse().join('');
}
