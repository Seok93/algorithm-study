### 🔍 문제 링크
[Level2 **주식가격** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/42584)

### 📘 문제 설명
초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.

### 📕 제한사항
- prices의 각 가격은 1 이상 10,000 이하인 자연수입니다.
- prices의 길이는 2 이상 100,000 이하입니다.

### 📙 입출력 예
|prices|return|
|:---|:---|
|[1, 2, 3, 2, 3]|[4, 3, 1, 1, 0]|

### 📒 입출력 예 설명
- 1초 시점의 ₩1은 끝까지 가격이 떨어지지 않았습니다.
- 2초 시점의 ₩2은 끝까지 가격이 떨어지지 않았습니다.
- 3초 시점의 ₩3은 1초뒤에 가격이 떨어집니다. 따라서 1초간 가격이 떨어지지 않은 것으로 봅니다.
- 4초 시점의 ₩2은 1초간 가격이 떨어지지 않았습니다.
- 5초 시점의 ₩3은 0초간 가격이 떨어지지 않았습니다.

### 📔 나의 알고리즘 순서
1. 시간별 현재 가격을 가져온다.
2. stack에 저장한 이전 가격들과 현재 가격을 비교한다.  
  2-1. 현재 가격이 이전 가격과 같거나 높으면, 1번부터 다시 진행  
  2-2. 현재 가격이 이전 가격보다 낮으면, 가격이 떨어지지 않은 기간을 계산하고 이전 가격 집합에서 삭제한다.  
  2-3. 2-2를 충족하는한 stack이 비어질 때까지 반복한다.

### ✅ 나의 해답코드
```javascript
function solution(prices) {
  const answer = Array(prices.length).fill(0);

  const stack = [];
  prices.forEach((curPrice, curTime) => {
    while (stack.length) {
      const [prevPrice, prevTime] = stack[stack.length - 1];
      if (prevPrice <= curPrice) break;
      answer[prevTime] = curTime - prevTime;
      stack.pop();
    }
    stack.push([curPrice, curTime]);
  });

  const totalTime = prices.length - 1;
  while (stack.length) {
    const [_, time] = stack.pop();
    answer[time] = totalTime - time;
  }

  return answer;
}
```

### ✨ 깔끔한 해답코드
```javascript
function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = [];
  let length = prices.length;

  for(let i = 0; i < length; i++) {
    while(stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      let temp = stack.pop();
      answer[temp] = i - temp;
    }
    stack.push(i);
  }

  while(stack.length) {
    let temp = stack.pop();
    answer[temp] = length - temp - 1;
  }

  return answer;
}
```

Level2 뒤에 있는 큰수를 구할 때에도 느꼈지만, stack 문제에서 이전 가격을 비교할 때 while문의 조건문에서 비교하면 상대적으로 내부 로직이 가벼워져 필요한 부분에 더욱 집중할 수 있음을 알게 되었다. 다음에도 stack을 활용하여 이전 데이터를 비교할 때가 있다면 사용해봐야겠다.

### 🤔고민한점 & 💡배운점
1\) 🤔 가격 데이터를 하나씩 가져와서 이전 가격을 순차적으로 비교하는 과정에서 stack의 특성을 찾을 수 있다. 

stack에서 기록한 이전 가격을 하나 가져와 현재 가격이랑 비교한다. 현재 가격이 이전 가격보다 작으면, stack에서 이전 가격을 제거하며 떨어지지 않은 기간을 기록한다. 이를 현재 가격이 이전 가격보다 크거나 같을 때까지 반복하면 가격이 떨어진 대상을 순차적으로 제거할 수 있고, 아직 가격이 떨어지지 않은 데이터는 다음 비교에 가져갈 수 있다.

이렇게 직전과 관련된 데이터들은 stack의 특성을 사용하면 편리하다.
