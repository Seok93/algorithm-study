### 🔍 문제 링크
[Level2 **괄호 회전하기** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/76502)

### 📘 문제 설명
다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.

- `()`, `[]`, `{}` 는 모두 올바른 괄호 문자열입니다.
- 만약 A가 올바른 괄호 문자열이라면, `(A)`, `[A]`, `{A}` 도 올바른 괄호 문자열입니다. 예를 들어, `[]` 가 올바른 괄호 문자열이므로, `([])` 도 올바른 괄호 문자열입니다.
- 만약 `A`, `B`가 올바른 괄호 문자열이라면, `AB` 도 올바른 괄호 문자열입니다. 예를 들어, `{}` 와 `([])` 가 올바른 괄호 문자열이므로, `{}([])` 도 올바른 괄호 문자열입니다.

대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 `s`가 매개변수로 주어집니다. 이 `s`를 왼쪽으로 x (0 ≤ x < (`s`의 길이)) 칸만큼 회전시켰을 때 `s`가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.

### 📕 제한사항
- s의 길이는 1 이상 1,000 이하입니다.

### 📙 입출력 예
|s|result|
|:---|:---|
|"[](){}"|3|
|"}]()[{"|2|
|"[)(]"|0|
|"}}}"|0|

### 📒 입출력 예 설명
**입출력 예 #1**  
- 다음 표는 "[](){}" 를 회전시킨 모습을 나타낸 것입니다.

|x|s를 왼쪽으로 x칸만큼 회전|올바른 괄호 문자열?|
|:---|:---|:---|
|0|"[](){}"|O|
|1|"](){}["|X|
|2|"(){}[]"|O|
|3|"){}[]("|X|
|4|"{}[]()"|O|
|5|"}[](){"|X|

올바른 괄호 문자열이 되는 x가 3개이므로, 3을 return 해야 합니다.

**입출력 예 #2**  
- 다음 표는 "}]()[{" 를 회전시킨 모습을 나타낸 것입니다.

|x|s를 왼쪽으로 x칸만큼 회전|올바른 괄호 문자열?|
|:---|:---|:---|
|0|"}]()[{"|X|
|1|"]()[{}"|X|
|2|"()[{}]"|O|
|3|")[{}]("|X|
|4|"[{}]()"|O|
|5|"{}]()["|X|

올바른 괄호 문자열이 되는 x가 2개이므로, 2를 return 해야 합니다.

**입출력 예 #3**  
s를 어떻게 회전하더라도 올바른 괄호 문자열을 만들 수 없으므로, 0을 return 해야 합니다.

**입출력 예 #4**  
s를 어떻게 회전하더라도 올바른 괄호 문자열을 만들 수 없으므로, 0을 return 해야 합니다.

### 📔 나의 알고리즘 순서
1. 주어진 문자열 `s`의 문자를 하나 회전시켜 새로운 문자열을 만든다.
2. 회전하여 나온 문자열이 올바른 괄호인지 확인한다.
   2-1. stack에 문자열의 문자 하나씩 넣는다.  
   2-2. stack의 상위 2개의 문자를 가져와 올바르게 괄호가 닫혔는지 확인한다.  
   2-3. 모든 문자열의 문자를 다 순회할 때까지 2-1 ~ 2-2를 반복한다.
3. 주어진 문자열 `s`의 길이만큼 문자를 회전시켜 1~2를 반복한다.

### ✅ 나의 해답코드
```javascript
function solution(s) {
    let answer = 0;
    let copy = [...s];
    
    for(let i = 0; i < s.length; i++) {
        const regex = /\[\]|\(\)|\{\}/;
        const stack = [];
        for(const char of copy) {
            stack.push(char);
            if(regex.test(stack.slice(-2).join(''))) {
                stack.splice(-2);
            }
        }
        if(stack.length === 0) answer++;
        copy.push(copy.shift());
    }
    
    return answer;
}
```

### 📝고민한점 & 💡배운점
1\) 🤔이전에 [Level2 올바른 괄호](../%EC%98%AC%EB%B0%94%EB%A5%B8%EA%B4%84%ED%98%B8/problem.md) 문제와 많이 유사한 문제였다. 올바른 괄호의 경우 효율성 때문에 올바른 괄호가 아니라고 판별되는 순간 바로 중단해야하지만, 이번 문제의 경우 `s`의 길이가 최대 1000이기에 전체 길이를 확인하도록 만들었다. 

그리고 괄호가 올바르게 닫혔는지 확인하는 로직은 이전에 풀었던 [Level1 햄버거 만들기](../../level1/%ED%96%84%EB%B2%84%EA%B1%B0%EB%A7%8C%EB%93%A4%EA%B8%B0/problem.md)의 로직을 활용하여 풀었다. stack을 통해 문자를 하나씩 쌓고, 상위 2개의 문자가 `()`, `{}`, `[]` 등의 괄호에 충족되는지 확인하는 방법을 사용했다.