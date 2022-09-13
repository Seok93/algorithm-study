function solution(number, k) {
  const memo = [];

  for (let i = 0; i < number.length; i++) {
    /**
     * 1. 비교할 대상이 있는지
     * 2. k개만큼 삭제했는지
     * 3. 앞자리가 뒷자리보다 작은지
     * 딱 한 번만 비교해본다.
     */
    while (memo.length > 0 && k > 0 && memo[memo.length - 1] < number[i]) {
      memo.pop();
      k--;
    }
    memo.push(number[i]);
  }
  memo.splice(memo.length - k, k);

  return memo.join('');
}
