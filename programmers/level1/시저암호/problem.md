### 🔍 문제 링크
[Level1 **시저 암호** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/12926)

### 📘 문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

### 📕 제한사항
- 공백은 아무리 밀어도 공백입니다.
- s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
- s의 길이는 8000이하입니다.
- n은 1 이상, 25이하인 자연수입니다.

### 📙 입출력 예
|s|n|result|
|:---|:---|:---|
|"AB"|1|"BC"|
|"z"|1|"a"|
|"a B z"|4|"e F d"|

### 📔 나의 알고리즘 순서
1. 문자열의 이터레이터 성질을 이용하여, 배열로 바꾼 후 문자 하나하나씩 순회한다.  
2. 문자가 대문자인지, 소문자인지 확인한다.  
  2-1. 대문자의 경우, 대문자 A의 아스키 코드를 빼준 후 시저 암호 연산을 진행한다.  
  2-2. 소문자의 경우, 소문자 A의 아스키 코드를 빼준 후 시저 암호 연산을 진행한다.

### ✅ 나의 해답코드
```javascript
function solution(s, n) {
  const UPPER_A_ASCII = 65;
  const LOWER_A_ASCII = 97;
  const ALPABAT_COUNT = 26;

  return [...s]
    .map((c) => {
      const UPPER_REGEX = /[A-Z]/;
      const LOWER_REGEX = /[a-z]/;

      let code = c.charCodeAt();
      if (UPPER_REGEX.test(c)) {
        code = ((code + n - UPPER_A_ASCII) % ALPABAT_COUNT) + UPPER_A_ASCII;
      } else if (LOWER_REGEX.test(c)) {
        code = ((code + n - LOWER_A_ASCII) % ALPABAT_COUNT) + LOWER_A_ASCII;
      }
      return String.fromCharCode(code);
    })
    .join('');
}
```

### ✨ 깔끔한 or 신기한 해답코드
```javascript
// String.prototype.replace를 이용한 깔끔한 풀이
function solution(s, n) {
  return s.replace(/([a-z])|([A-Z])/g, (c, lowerCase) => {
    const startCode = lowerCase ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
    return String.fromCharCode(((c.charCodeAt(0) - startCode + n) % 26) + startCode);
  });
}

```

```javascript
// 비트 연산자를 이용한 신기한 풀이
function solution(s, n) {
    return s.replace(/[a-z]/ig, c => [ c = c.charCodeAt(0), String.fromCharCode((c & 96) + (c % 32 + n - 1) % 26 + 1) ][1]);
}
```
2진법으로 대문자의 코드들은 `1000001~1011010`, 소문자는 `1100001~1111010`라서 앞에 2자리로 빼고는 같습니다. **즉, 앞의 2자리로 대소문자를, 나머지 5자리로 알파벳을 구분합니다.** 따라서 `(c & 96(1100000))`으로 앞의 2자리만 가져와 먼저 대소문자 구분부를 빼놓습니다.

다음 뒤에 남은 5자리의 수(00001\~11010)를 가져오기 위해 `c % 32(100000)`를 합니다. a가 1부터 시작하니 나머지 계산을 위해 '- 1'을 해서 초기점을 0으로(00000\~11001) 잡아줍니다. 그럼 0~25의 숫자 중 하나가 나오고 여기서 n만큼 더해준 뒤 26으로 나머지 계산을 하고 다시 아까 빼 준 1을 다시 더한 것입니다.