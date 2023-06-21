### 🔍 문제 링크
[Level1 **모의고사** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/42840)

### 📘 문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...  
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...  
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...  

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

### 📕 제한사항
- 시험은 최대 10,000 문제로 구성되어있습니다.
- 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
- 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

### 📙 입출력 예
|answers|return|
|:---|:---|
|[1,2,3,4,5]|[1]|
|[1,3,2,4,2]|[1,2,3]|

### 📒 입출력 예 설명
**입출력 예 #1**  
- 수포자 1은 모든 문제를 맞혔습니다.
- 수포자 2는 모든 문제를 틀렸습니다.
- 수포자 3은 모든 문제를 틀렸습니다.

따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

**입출력 예 #2**  
모든 사람이 2문제씩을 맞췄습니다.

### 📔 나의 알고리즘 순서
1. 패턴에 따른 정답 개수를 계산한다.
2. 가장 많이 맞힌 사람을 추출한다.

### ✅ 나의 해답코드
```javascript
function solution(answers) {
  const result = [];
  const scores = [0, 0, 0];
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  answers.forEach((answer, i) => {
    patterns.forEach((pattern, j) => {
      const selection = pattern[i % pattern.length];
      if (answer === selection) scores[j] += 1;
    });
  });

  const max = Math.max(...scores);
  scores.forEach((score, idx) => score === max && result.push(idx + 1));

  return result;
}
```

### 📝고민한점 & 💡배운점
**1\) 🤔 패턴에 따른 정답 개수를 구한 뒤, 가장 많이 맞힌 사람을 추출할 때 어떤 방식으로 하면 좋을지 고민하게 되었다.**

패턴에 따른 정답 개수를 유저 순서별로 배열에 저장 해놓은 상황이었다. 처음에는 최대 점수를 구한 후에 filter를 통해 걸러낸 뒤, 맞힌 사람을 순차적으로 표현하면 좋겠다고 생각했다. 

문제는 filter로 걸러낼 때, 배열 안의 순서가 무너지기 때문에 현재 요소가 몇번째였는지 추가적인 정보가 필요했다. 그래서 생각한 방법이 튜플 형식으로 `[사람 번호, 정답 개수]`를 하나의 요소로 저장하도록 변경하는 것이었다.

이러한 내용을 반영했을 때 나온 코드는 아래와 같고, 정답을 도출하는데 아무런 문제가 없었다.

```javascript
const max = Math.max(...scores);
const users = scores.map((score, idx) => [idx+1, score]);
return users.filter(user => user[1] === max).map(user => user[0]);
```

그런데 굳이 튜플 형식으로 데이터 형태를 바꾸면서까지 처리할 필요가 있을까 의문이 생겼다. 결국에는 최대 점수를 바탕으로 고득점자만 순서대로 뽑아내면 되기 때문이다. 고민하던 끝에 단순한게 제일 좋다는 생각으로 foEach 메서드를 통해 순차적인 검사만 진행하면 된다는 결론을 내렸고, 최종적인 코드가 forEach 메서드로 변경되었다.

```javascript
const result = [];
const max = Math.max(...scores);
scores.forEach((score, idx) => score === max && result.push(idx + 1));
return result;
```