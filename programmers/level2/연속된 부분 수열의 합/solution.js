function solution(sequence, k) {
  let answer = [0, sequence.length];
  let left = 0;
  let right = 0;
  let sum = sequence[0];
  while (right < sequence.length) {
    if (sum < k) sum += sequence[++right];
    else if (sum > k) sum -= sequence[left++];
    else {
      const prevLen = answer[1] - answer[0];
      const curLen = right - left;
      if (curLen < prevLen) answer = [left, right];
      sum -= sequence[left++];
    }
  }

  return answer;
}
