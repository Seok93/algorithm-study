### 🔍 문제 링크
[Level2 **숫자 변환하기** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/154538)

### 📘 문제 설명
자연수 `x`를 `y`로 변환하려고 합니다. 사용할 수 있는 연산은 다음과 같습니다.

`x`에 `n`을 더합니다
`x`에 2를 곱합니다.
`x`에 3을 곱합니다.
자연수 `x`, `y`, `n`이 매개변수로 주어질 때, `x`를 `y`로 변환하기 위해 필요한 최소 연산 횟수를 return하도록 solution 함수를 완성해주세요. 이때 `x`를 `y`로 만들 수 없다면 -1을 return 해주세요.

### 📕 제한사항
- 1 ≤ `x` ≤ `y` ≤ 1,000,000
- 1 ≤ `n` < `y`

### 📙 입출력 예
|x|y|n|result|
|:---|:---|:---|:---|
|10|40|5|2|
|10|40|30|1|
|2|5|4|-1|

### 📒 입출력 예 설명
**입출력 예 #1**  
`x`에 2를 2번 곱하면 40이 되고 이때가 최소 횟수입니다.

**입출력 예 #2**  
`x`에 `n`인 30을 1번 더하면 40이 되고 이때가 최소 횟수입니다.

**입출력 예 #3**  
`x`를 `y`로 변환할 수 없기 때문에 -1을 return합니다.

### 📔 나의 알고리즘 순서
1. y를 기준으로 3으로 나누기, 2로 나누기, n 빼기를 진행한다.
2. 결과값이 x를 충족하는가 확인한다.  
  2-1. x와 같으면 연산 횟수를 반환하고 종료한다.  
  2-2. x보다 크면, queue에 저장한다.  
  2-3. x보다 작으면, 무시한다.  
3. queue가 완전히 비거나, 조기에 충족하는 내용이 있을 때까지 확인한다.

### ✅ 나의 해답코드
```javascript
// BFS 백트래킹을 이용한 풀이
function solution(x, y, n) {
  if (x === y) return 0;

  let count = 0;
  const queue = [y];
  while (queue.length) {
    count++;
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const target = queue.shift();
      for (const number of [target / 3, target / 2, target - n]) {
        if (!Number.isInteger(number)) continue;
        if (number === x) return count;
        if (number > x) queue.push(number);
      }
    }
  }
  return -1;
}
```

### ✨ 깔끔한 해답코드
```javascript
// DP를 이용한 풀이
function solution(x, y, n) {
  const dp = new Array(y + 1).fill(Infinity);
  dp[x] = 0;
  for(let i = x; i <= y; i++){
    dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
  }
  return dp[y] !== Infinity? dp[y] : -1;
}
```

### 🤔고민한점 & 💡배운점
1\) 🤔 일단 나는 DP 방식으로 풀이하진 않았다. 하지만 문제가 원했던 것은 DP 알고리즘을 활용한 방법이었다. 

예전에 [점프와 순간이동](../점프와순간이동/problem.md) 문제를 풀 때, 몫과 나머지를 활용하여 풀이한 방법이 생각났다. 이때 처럼 `y`를 기준으로 최대한 3으로 나누는 방식으로 진행하면 최소 연산이지 않을까 생각 했지만, 유동적인 수치로 나오는 나머지를 고정된 값 `n`을 더해서 보정해야하기 때문에 사용할 수 없었다.

다음으로 생각한 것은 완전탐색(DFS/BFS)을 진행하는 것이었다. 최소 횟수이니 BFS를 활용하려고 생각했다. 추가적으로 조건이 충족되지 않으면 더이상 검사를 진행하지 않도록 유망함수를 준비하여 백트래킹 방식으로 풀이하는게 좋을 것 같았다. 풀이를 진행하고 결과를 봤을 때, 시간 초과가 발생했다.

```js
// BFS를 이용한 1차 풀이
function solution(x, y, n) {
  let count = 0;
  const queue = [x];
  while (queue.length) {
    count++;
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const target = queue.shift();
      for (const number of [target * 3, target * 2, target + n]) {
        if (number === y) return count;
        if (number < y) queue.push(number);
      }
    }
  }

  return -1;
}
```

처음부터 x를 기준으로 3가지의 연산을 진행하면, 경우의 수가 3의 배수로 증가하는 것과 같았다. 이는 연산량이 폭발적으로 늘어나기 때문에 시간 초과가 발생하더라도 이상하지 않았다.

그래서 작은수 x부터 3가지 연산을 진행해서 y까지 끌어올리기 보다, y를 기준으로 반대가 되는 3가지 연산을 진행하는게 어떨까란 생각이 들었다. 3으로 나누기, 2로 나누기, n으로 빼기를 각각 진행하며, 2 or 3으로 나누어 떨어지지 않으면 해당 경우의 수를 버릴 수 있어서 경우의 수를 줄일 수 있었다. 이를 적용한 방법이 현재 나의 해답 코드에 있다.


2\) 💡문제를 통과한 이후 다른 사람 풀이를 읽으면서 DP 문제였음을 알게 되었다. 3가지 연산을 진행하면서 나오는 해를 가지고 탐색하는 것이 아니라, x부터 y까지 순차적으로 3가지 연산을 전부 진행하는 방법으로 풀이를 진행하고, dp 알고리즘의 특성답게 연산 횟수를 메모이제이션 하여, 최소 연산량을 반환하는 방법으로 만들어졌다.

아직 DP 문제를 많이 풀어보지 않아서 이번 문제가 DP 문제인지 캐치하지 못했다... 같은 연산의 반복으로 작은 결과가 쌓여 큰 결과로 이어지는 특성이 보이면 DP를 고려하도록 마음에 새겨야겠다.

### 🔍참고 내용