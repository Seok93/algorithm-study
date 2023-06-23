### 🔍 문제 링크
[Level2 **짝지어 제거하기** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/12973?language=javascript)

### 📘 문제 설명
짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다. 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다. 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다. 이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다. 문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요. 성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.

예를 들어, 문자열 S = `baabaa` 라면

b aa baa → bb aa → aa →

의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.

### 📕 제한사항
- 문자열의 길이 : 1,000,000이하의 자연수
- 문자열은 모두 소문자로 이루어져 있습니다.

### 📙 입출력 예
|s|result|
|:---|:---|
|baabaa|1|
|cdcd|0|

### 📒 입출력 예 설명
**입출력 예 #1**  
위의 예시와 같습니다.

**입출력 예 #2**  
문자열이 남아있지만 짝지어 제거할 수 있는 문자열이 더 이상 존재하지 않기 때문에 0을 반환합니다.

### 📔 나의 알고리즘 순서
1. stack이 empty라면 문자를 바로 적재하고, 다음 문자를 확인한다.
2. stack의 이전의 문자(peek)와 새로운 문자가 같은지 비교한다.
    - 같으면 문자 제거(pop)
    - 다르면 문자 적재(push)
3. 문자열을 전부 검토했다면, 최종적으로 stack에 데이터가 남아있는지 확인한다.
    - 있다면, 일치하지 않은 문자들이 남았으니 0 반환
    - 없다면, pair를 이루었으니 1 반환

### ✅ 나의 해답코드
```javascript
// JS 해답
function solution(s) {
  let result = -1;
  const stack = [];

  [...s].forEach((c) => {
    if (stack[stack.length - 1] === c) stack.pop();
    else stack.push(c);
  });

  return stack.length === 0 ? 1 : 0;
}

```

```python
# 파이썬 해답
def solution(s):
    stack = []

    for c in s:
        if not stack:
            stack.append(c)
            continue
        if stack[-1] == c:
            stack.pop()
        else:
            stack.append(c)

    if len(stack) != 0:
        return 0
    else:
        return 1
```

### 📝고민한점 & 💡배운점
**1\) 🤔 문제를 풀면서 Level1의 크레인 인형뽑기 게임(카카오 겨울 인턴쉽)의 일부분의 로직이 들어가 있음을 느꼈다.**
크레인 인형뽑기 게임의 경우에도 인형을 하나씩 뽑아와서 stack에 쌓고, 같은 인형이 연속적으로 나올 때 stack에서 제거하고 인형을 뽑은 것으로 간주한다. Level2 문제가 Level1의 일부에 불과하다니... 뭔가 아이러니하다 역시 카카오 문제인가?