function solution(citations) {
  const answer = [];

  // 인용수를 기준으로 정렬
  citations.sort((a, b) => a - b);

  // 0번 인용부터 최대 인용 횟수까지 검사
  // 가능한 모든 H-index를 배열에 담고, 배열의 최댓값을 찾는다.
  for (let h_index = 0; h_index < citations[citations.length - 1]; h_index++) {
    const array = citations.filter((citation) => citation >= h_index);
    if (h_index <= array.length) {
      answer.push(h_index);
    }
  }

  return answer.length > 0 ? answer.pop() : 0;
}
