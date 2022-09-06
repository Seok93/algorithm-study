## ✨ 정렬
[Level2 **H-index** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/42747) 

### 📘 문제 설명
H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, `h`번 이상 인용된 논문이 `h`편 이상이고 나머지 논문이 `h`번 이하 인용되었다면 `h`의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

### 📕 제한사항
- 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
- 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

### 📙 입출력 예
|citations|return|
|:---|:---|
|[3, 0, 6, 1, 5]|3|

### 📒 입출력 예 설명
이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다. 그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.

### 📗 개인적인 문제 해설
> 어떤 과학자가 발표한 논문 n편 중, `h`번 이상 인용된 논문이 `h`편 이상이고 나머지 논문이 `h`번 이하 인용되었다면 `h`의 최댓값이 이 과학자의 H-Index입니다.

처음에는 이게 무슨 소리인지 이해가 안되어서, H-index에 대해 위키백과를 읽어보았다.

> The h-index is defined as the maximum value of h such that the given author/journal has published at least h papers that have each been cited at least h times.

요점은 `h(= h-index)`번 이상 인용된 논문이 `h`편 이상이 되는 경우의 수중 최댓값을 구하면 되는 문제였다. 문제의 설명처럼  `나머지 논문이 `h`번 이하 인용되었다면 `h`의 최댓값이 이 과학자의 H-Index입니다.` 이 부분은 위키에서 별도로 설명되어 있지 않았다.

정리하자면, 인용 횟수의 최솟값부터 최댓값을 비교해서 h-index의 조건에 부합하는 모든 경우의 수를 구하고, 그 중에 최댓값을 구하면 되는 문제였다.

### ✅ 해답코드
```javascript
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

```