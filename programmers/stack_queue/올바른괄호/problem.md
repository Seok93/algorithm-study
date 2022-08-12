## ✨ 스택/큐
[Level2 **올바른괄호** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/12909) 

### 📘 문제 설명
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

- "()()" 또는 "(())()" 는 올바른 괄호입니다.
- ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.

\'(\' 또는 \')\' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

### 📕 제한사항
- 문자열 s의 길이 : 100,000 이하의 자연수
- 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

### 📙 입출력 예
|s|answer|
|:---|:---|
|"()()"|true|
|"(())()"|true|
|")()("|false|
|"(()("|false|

### 📒 입출력 예 설명
입출력 예 #1,2,3,4
문제의 예시와 같습니다.

### 📗 개인적인 문제 해설
> 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다.

괄호가 짝을 지으려면 먼저 문자열의 길이가 짝수가 되어야 한다고 생각했다. 때문에 짝수 조건을 충족하지 않으면 검사를 할 필요 없다고 생각했다.


> |s|answer|
> |:---|:---|
> |"()()"|true|
> |"(())()"|true|
> |")()("|false|
> |"(()("|false|

\'(\'를 만나면 queue에 쌓고, \')\'를 만나면 queue에서 출력해서 최종적으로 queue가 0이었을 때 모든 괄호가 짝을 이루었음을 알 수 있다.

3번 예시를 보면 '('와 ')'의 개수는 같지만, ')'가 먼저오면 false가 됨을 알 수 있다. 때문에 ')'를 만나 queue에서 출력했을 때, 데이터가 없으면 false가 됨을 알 수 있다. 


### ✅ 해답코드
```js
// javascript
function solution(s) {
  let answer = false;
  let queueCount = 0;

  // 1. 문자열의 길이가 짝수인가 확인
  if (s.length % 2 === 0) {
    for (let letter of s) {
      // 2. 괄호의 형태에 따라 enqueue, dequeue
      letter === '(' ? queueCount++ : queueCount--;

      // 3. 만약 음수가 나오면 ')'가 먼저 나오는 경우이니 false 출력
      if (queueCount < 0) break;
    }

    // 4. queue의 길이가 0인 경우 괄호가 짝을 이뤘음을 알 수 있음
    if (queueCount === 0) {
      answer = true;
    }
  }

  return answer;
}

```

### 📔 다른 사람 풀이
```js
function solution(s){
    let count = 0;
    
    for(let letter of s) {
        count += letter === '('? 1: -1;
        if (count < 0) return false;
    }
    
    return count === 0 ? true : false;
}
```