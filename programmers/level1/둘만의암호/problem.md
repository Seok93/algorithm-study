### ✨ 문제 링크
[Level1 **둘만의 암호** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/155652) 

### 📘 문제 설명
두 문자열 `s`와 `skip`, 그리고 자연수 `index`가 주어질 때, 다음 규칙에 따라 문자열을 만들려 합니다. 암호의 규칙은 다음과 같습니다.

- 문자열 `s`의 각 알파벳을 `index`만큼 뒤의 알파벳으로 바꿔줍니다.
- `index`만큼의 뒤의 알파벳이 `z`를 넘어갈 경우 다시 `a`로 돌아갑니다.
- `skip`에 있는 알파벳은 제외하고 건너뜁니다.
  
예를 들어 `s` = "aukks", `skip` = "wbqd", `index` = 5일 때, `a`에서 5만큼 뒤에 있는 알파벳은 f지만 [b, c, d, e, f]에서 'b'와 'd'는 `skip`에 포함되므로 세지 않습니다. 따라서 'b', 'd'를 제외하고 'a'에서 5만큼 뒤에 있는 알파벳은 [c, e, f, g, h] 순서에 의해 'h'가 됩니다. 나머지 "ukks" 또한 위 규칙대로 바꾸면 "appy"가 되며 결과는 "happy"가 됩니다.

두 문자열 `s`와 `skip`, 그리고 자연수 `index`가 매개변수로 주어질 때 위 규칙대로 `s`를 변환한 결과를 return하도록 solution 함수를 완성해주세요.

### 📕 제한사항
- 5 ≤ `s`의 길이 ≤ 50
- 1 ≤ `skip`의 길이 ≤ 10
- `s`와 `skip`은 알파벳 소문자로만 이루어져 있습니다.
  - `skip`에 포함되는 알파벳은 `s`에 포함되지 않습니다.
- 1 ≤ `index` ≤ 20


### 📙 입출력 예
|s|skip|index|result|
|:---|:---|:---|:---|
|"aukks"|"wbqd"|5|"happy"|

### 📒 입출력 예 설명
입출력 예 #1
본문 내용과 일치합니다.

### 📔 나의 알고리즘 순서
1) `skip`할 알파벳의 아스키 코드값을 구한다.  
2) `s`의 문자 하나씩 가져와 아스키 코드값으로 변환한다.  
3) 아스키 코드값을 1 증가하여 옮기면서, `skip`할 문자에 포함되는지 확인한다.  
  3-1) 포함 한다면: 무시한다.  
  3-2) 포함 하지 않는다면: 이동으로 간주한다.  
4) `index`만큼 이동할 때까지 2~3번을 반복한다.  


### ✅ 나의 해답코드
```javascript
function solution(s, skip, index) {
    const A_ASCII = 97;
    const Z_ASCII = 122;
    
    const skipCode = [...skip].map(c => c.charCodeAt(0));
  
    return [...s].map(char => {
        const result = [];
        let cnt =  0;
        let code = char.charCodeAt(0);
        
        while(index > cnt) {
            if(++code > Z_ASCII) code = A_ASCII;
            if(!skipCode.includes(code)) {
                result.push(code);
                cnt++;
            }
        }
        return String.fromCharCode(code);
    }).join("");
    
}
```

### ✨ 깔끔한 해답코드
```javascript
// 알파벳 배열 내에서 skip할 알파벳을 제거한 뒤 이동하는 방법
// 특정 범위에 접근할 때 % 연산자를 이용한다.
function solution(s, skip, index) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                      "u", "v", "w", "x", "y", "z"].filter(c => !skip.includes(c));

    return [...s].map(c => alphabet[(alphabet.indexOf(c) + index) % alphabet.length]).join("");
}
```

```javascript
// 정규표현식을 사용하는 방법
const solution = (s, skip, index) => {
  let ans = '';
  const matched = 'abcdefghijklmnopqrstuvwxyz'.match(
    new RegExp(`[^${skip}]`, 'g'),
  );

  for (const c of s) {
    const newIdx = matched.indexOf(c) + index;
    ans += matched[newIdx % matched.length];
  }

  return ans;
};

```

### 📝배운점 & 고민한점
1\) 특정 범위에 존재하는 경우, %을 이용하면 더 깔끔한 코드를 짤 수 있다. 예를 들어 나의 경우 `Z_ASCII`의 범위를 넘어갔는지 확인하고, 넘어간다면 `A_ASCII`를 넣어주는 방식을 사용했지만, `code % alphabet.length`와 같이 알파벳 개수로 나눠서 나머지 값을 index로 사용한다면, 알파벳 배열 내의 원하는 문자에 접근할 수 있다.

2\) 매번 skip할 문자인지 확인하는 것보다, skip할 문자를 알파벳 배열에서 제거한다면 검사를 할 필요가 없다.