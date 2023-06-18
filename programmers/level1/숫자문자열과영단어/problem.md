### 🔍 문제 링크
[Level1 **숫자 문자열과 영단어** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/81301)

### 📘 문제 설명
![숫자놀이 사진1](imgs/1.png)

네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

- 1478 → "one4seveneight"
- 234567 → "23four5six7"
- 10203 → "1zerotwozero3"

이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

|숫자|영단어|
|:---|:---|
|0|zero|
|1|one|
|2|two|
|3|three|
|4|four|
|5|five|
|6|six|
|7|seven|
|8|eight|
|9|nine|

### 📕 제한사항
- 1 ≤ `s`의 길이 ≤ 50
- `s`가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
- return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 `s`로 주어집니다.

### 📙 입출력 예
|s|result|
|:---|:---|
|"one4seveneight"|1478|
|"23four5six7"|234567|
|"2three45sixseven"|234567|
|"123"|123|

### 📒 입출력 예 설명
**입출력 예 #1**  
문제 예시와 같습니다.

**입출력 예 #2**  
문제 예시와 같습니다.

**입출력 예 #3**  
"three"는 3, "six"는 6, "seven"은 7에 대응되기 때문에 정답은 입출력 예 #2와 같은 234567이 됩니다.
입출력 예 #2와 #3과 같이 같은 정답을 가리키는 문자열이 여러 가지가 나올 수 있습니다.

**입출력 예 #4**  
`s`에는 영단어로 바뀐 부분이 없습니다.

### 📔 나의 알고리즘 순서
1. 문자열의 문자 하나씩에 접근한다.
2. 문자가 숫자인지 확인한다.  
    2-1. 숫자라면, 결과물에 바로 붙이고 1번부터 다시 시작한다.  
    2-2. 문자라면, buffer에 쌓는다.
3. buffer에 쌓인 문자열이 NUMNER_SET에 포함되는지 확인한다.  
    3-1. 포함된다면, 문자열을 숫자로 변환하여 반환한다.  
    3-2. 포함되지 않는다면, 다시 1번부터 시작한다.

### ✅ 나의 해답코드
```javascript
function solution(s) {
  const NUMBER_SET = Object.freeze({
    zero: 0, one: 1, two: 2, three: 3, four: 4,
    five: 5, six: 6, seven: 7, eight: 8, nine: 9,
  });

  let answer = '';
  let buffer = '';
  [...s].forEach((c) => {
    const regex = /\d/;
    if (regex.test(c)) {
      answer += c;
    } else {
      buffer += c;
      if (buffer in NUMBER_SET) {
        answer += NUMBER_SET[buffer];
        buffer = '';
      }
    }
  });

  return Number(answer);
}
```

### ✨ 깔끔한 해답코드
```javascript
// 풀이 1: 정규표현식과 String.prototype.replace 메서드를 이용한 치환 방법
function solution(s) {
    s = s.replace(/zero/g, 0)
    .replace(/one/g, 1)
    .replace(/two/g, 2)
    .replace(/three/g, 3)
    .replace(/four/g, 4)
    .replace(/five/g, 5)
    .replace(/six/g, 6)
    .replace(/seven/g, 7)
    .replace(/eight/g, 8)
    .replace(/nine/g, 9)
    return parseInt(s);
}
```

```javascript
// 풀이 2: 위의 중복적인 내용을 해결한 방법
const digit2word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function solution(s) {
  return Number(digit2word.reduce((ans, word, digit) => ans.replace(new RegExp(word, 'g'), digit), s));
}
```
풀이1과 풀이2는 기본적으로 정규표현식과 `String.prototype.replace` 메서드를 사용하는 방법이다. 풀이1은 풀이2를 이해하기 위해 넣어뒀기 때문에 풀이2를 중점적으로 보면 된다.

풀이2에서 인상 깊은 점은 정규표현식에 사용할 숫자 문자열을 배열로 묶어서 정리하고, reduce를 통해 하나씩 치환에 활용한다는 점이다. 보통 reduce 메서드는 합산에 사용한다는 인식이 강했는데, 요소에 순차적으로 접근하여 원하는 처리를 진행하고, 결과값을 반환하는데 활용할 때도 언제든지 사용할 수 있다는 점을 재인식하게 되었다.

보통 순차적인 요소 접근과 처리는 forEach 메서드를 생각하고, 각 요소들에 특정 처리가 적용되어 변환된 배열을 받을 때엔 map 메서드를 생각했다. 하지만 순차적인 접근과 처리, 그에 따른 변경된 결과값들을 사용할 때 reduce를 고려해 봐야겠다.


### 📝고민한점 & 💡배운점
**1\) 🤔하나의 문자열에서 일부의 문자열이 특정값에 부합하는지 어떻게 확인할까? 에 대해 고민했다.**  

스스로 풀어볼 때는 buffer에 문자를 하나씩 저장하고, buffer에 쌓인 문자열이 특정값에 부합하는지를 확인하여 숫자 값으로 치환하였다.

이후에 다른 사람들의 풀이를 보며, 특정값에 부합하는지 확인할 때에 정규표현식을 활용하고, replace 메서드를 이용하여 치환하면 좋다는 점을 알게 되었다. 특정값을 찾을 때는 정규표현식이 좋다는 점을 알고 있음에도 막상 문제를 풀 때에는 정규표현식을 이용하자라는 생각이 바로 나지 않는다. 

**특정값에 부합하는지 확인하고 어떤 처리를 사용할 땐 정규표현식을 활용을 고려하자!**