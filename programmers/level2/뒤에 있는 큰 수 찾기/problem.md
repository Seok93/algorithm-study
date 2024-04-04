### 🔍 문제 링크
[Level2 **뒤에 있는 큰 수 찾기** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/154539)

### 📘 문제 설명
정수로 이루어진 배열 `numbers`가 있습니다. 배열 의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고 합니다.
정수 배열 `numbers`가 매개변수로 주어질 때, 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return 하도록 solution 함수를 완성해주세요. 단, 뒷 큰수가 존재하지 않는 원소는 -1을 담습니다.

### 📕 제한사항
4 ≤ `numbers`의 길이 ≤ 1,000,000
1 ≤ `numbers[i]` ≤ 1,000,000

### 📙 입출력 예
|numbers|result|
|:---|:---|
|[2, 3, 3, 5]|[3, 5, 5, -1]|
|[9, 1, 5, 3, 6, 2]|[-1, 5, 6, 6, -1, -1]|

### 📒 입출력 예 설명
**입출력 예 #1**  
2의 뒷 큰수는 3입니다. 첫 번째 3의 뒷 큰수는 5입니다. 두 번째 3 또한 마찬가지입니다. 5는 뒷 큰수가 없으므로 -1입니다. 위 수들을 차례대로 배열에 담으면 [3, 5, 5, -1]이 됩니다.

**입출력 예 #2**  
9는 뒷 큰수가 없으므로 -1입니다. 1의 뒷 큰수는 5이며, 5와 3의 뒷 큰수는 6입니다. 6과 2는 뒷 큰수가 없으므로 -1입니다. 위 수들을 차례대로 배열에 담으면 [-1, 5, 6, 6, -1, -1]이 됩니다.

### 📔 나의 알고리즘 순서
1. numbers에 있는 숫자에 순차적으로 접근한다.
2. 이전에 접근했으나 해결되지 않은 숫자들과 현재의 숫자를 비교한다.  
  2-1. 현재 숫자가 더 큰 경우, 이전의 숫자들의 뒷 큰수를 현재 숫자로 기록한다.  
  2-2. 현재 숫자가 이전과 같거나 작은 경우, 1번부터 다시 시작한다.  

### ✅ 나의 해답코드
```javascript
function solution(numbers) {
  const answer = new Array(numbers.length).fill(-1);
  const stack = [];
  numbers.forEach((number, idx) => {
    const node = [number, idx];
    while (stack.length) {
      const [pNum, pIdx] = stack.pop();
      if (number <= pNum) {
        stack.push([pNum, pIdx]);
        break;
      }
      answer[pIdx] = number;
    }
    stack.push(node);
  });

  return answer;
}
```

### ✨ 깔끔한 해답코드
```javascript
function solution(nums) {
  const dp = new Array(nums.length).fill(-1);
  const stack = [0];
  for (let i = 1; i < nums.length; i++) {
    while (
      stack.length && 
      nums[stack[stack.length - 1]] < nums[i]
    ) {
      dp[stack.pop()] = nums[i];
    }
    stack.push(i);
  }
  return dp;
}
```
나의 해답 코드와 로직이 유사하지만, 깔끔한 코드의 경우 내부에서 진행하던 크기 비교를 while문 조건으로 빼냈고, push와 pop 연산을 생략하여 더 빠른 성능을 보였다. 사소하지만 이런 디테일이 중요한 것 같다.

### 🤔고민한점 & 💡배운점
1\) 🤔 문제를 읽고 제한 사항의 케이스가 100만인 것을 보고, 최소 O(NlogN) 성능을 내야한다고 생각했다. 평소였다면, O(N^2) 형식으로 간단하게 풀 수 있지만, 이렇게 풀면 분명히 시간 초과가 발생했을 것이다.

그래서 `numbers`에 순차적으로 접근하되, 이전에 해결되지 않은 숫자들을 순차적으로 적재하면서, 최대한 O(N)에 가깝게 해결하는 방법이 없을까 고민하게 되었다. 그러다 해결되지 않는 숫자들이 쌓일 때엔 내림차순처럼 순차적으로 쌓이게 된다는 것을 알게 되었다. 문제 특성상 현재 접근한 숫자보다 같거나 작으면 다 제거 되기 때문이었다.

이렇게 규칙이 보이고나니 문제의 풀이는 스택으로 정의할 수 있다고 생각했다. 직전에 확인한 데이터부터 순차적으로 확인하고 빼내는 특성이 스택이었다. 이를 적용하여 문제를 해결하였다. 
