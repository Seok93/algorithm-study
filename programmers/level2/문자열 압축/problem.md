### 🔍 문제 링크
[Level2 **문자열 압축** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/60057)

### 📘 문제 설명
데이터 처리 전문가가 되고 싶은 "어피치"는 문자열을 압축하는 방법에 대해 공부를 하고 있습니다. 최근에 대량의 데이터 처리를 위한 간단한 비손실 압축 방법에 대해 공부를 하고 있는데, 문자열에서 같은 값이 연속해서 나타나는 것을 그 문자의 개수와 반복되는 값으로 표현하여 더 짧은 문자열로 줄여서 표현하는 알고리즘을 공부하고 있습니다.
간단한 예로 "aabbaccc"의 경우 "2a2ba3c"(문자가 반복되지 않아 한번만 나타난 경우 1은 생략함)와 같이 표현할 수 있는데, 이러한 방식은 반복되는 문자가 적은 경우 압축률이 낮다는 단점이 있습니다. 예를 들면, "abcabcdede"와 같은 문자열은 전혀 압축되지 않습니다. "어피치"는 이러한 단점을 해결하기 위해 문자열을 1개 이상의 단위로 잘라서 압축하여 더 짧은 문자열로 표현할 수 있는지 방법을 찾아보려고 합니다.

예를 들어, "ababcdcdababcdcd"의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 2개 단위로 잘라서 압축한다면 "2ab2cd2ab2cd"로 표현할 수 있습니다. 다른 방법으로 8개 단위로 잘라서 압축한다면 "2ababcdcd"로 표현할 수 있으며, 이때가 가장 짧게 압축하여 표현할 수 있는 방법입니다.

다른 예로, "abcabcdede"와 같은 경우, 문자를 2개 단위로 잘라서 압축하면 "abcabc2de"가 되지만, 3개 단위로 자른다면 "2abcdede"가 되어 3개 단위가 가장 짧은 압축 방법이 됩니다. 이때 3개 단위로 자르고 마지막에 남는 문자열은 그대로 붙여주면 됩니다.

압축할 문자열 s가 매개변수로 주어질 때, 위에 설명한 방법으로 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return 하도록 solution 함수를 완성해주세요.

### 📕 제한사항
- s의 길이는 1 이상 1,000 이하입니다.
- s는 알파벳 소문자로만 이루어져 있습니다.

### 📙 입출력 예
|s|result|
|:---|:---|
|"aabbaccc"|7|
|"ababcdcdababcdcd"|9|
|"abcabcdede"|8|
|"abcabcabcabcdededededede"|14|
|"xababcdcdababcdcd"|17|

### 📒 입출력 예 설명
**입출력 예 #1**  
문자열을 1개 단위로 잘라 압축했을 때 가장 짧습니다.

**입출력 예 #2**  
문자열을 8개 단위로 잘라 압축했을 때 가장 짧습니다.

**입출력 예 #3**  
문자열을 3개 단위로 잘라 압축했을 때 가장 짧습니다.

**입출력 예 #4**  
문자열을 2개 단위로 자르면 "abcabcabcabc6de" 가 됩니다.
문자열을 3개 단위로 자르면 "4abcdededededede" 가 됩니다.
문자열을 4개 단위로 자르면 "abcabcabcabc3dede" 가 됩니다.
문자열을 6개 단위로 자를 경우 "2abcabc2dedede"가 되며, 이때의 길이가 14로 가장 짧습니다.

**입출력 예 #5**  
문자열은 제일 앞부터 정해진 길이만큼 잘라야 합니다.
따라서 주어진 문자열을 x / ababcdcd / ababcdcd 로 자르는 것은 불가능 합니다.
이 경우 어떻게 문자열을 잘라도 압축되지 않으므로 가장 짧은 길이는 17이 됩니다.

### 📔 나의 알고리즘 순서
1) n개 단위로 문자열 자르기 (n은 1이상 s문자열 절반까지)
2) 자른 문자열에 압축 실행하기
3) n이 s길이의 절반이 될때까지 1~2를 반복한다.

### ✅ 나의 해답코드
```javascript
function solution(s) {
  const answer = [];
  const make = (count, str) => (count > 1 ? `${count}${str}` : str);

  for (let compress = 1; compress <= Math.ceil(s.length / 2); compress++) {
    // 1. n개 단위로 문자열 자르기
    const regex = new RegExp(`\\w{${compress}}`, 'gi');
    const match = s.match(regex);
    const extra = s.slice(match.reduce((len, str) => len + str.length, 0));

    // 2. 자른 문자열을 기준으로 압축 실행하기
    let compressed = '';
    let prev = match[0];
    let count = 0;
    for (let i = 0; i < match.length; i++) {
      const current = match[i];
      if (prev === current) {
        count++;
        continue;
      }
      compressed += make(count, prev);
      prev = current;
      count = 1;
    }

    const result = compressed + make(count, prev) + extra;
    answer.push(result);
  }

  return Math.min(...answer.map((str) => str.length));
}

```

### 📝고민한점 & 💡배운점
1\) 🤔 문자열을 특정 단위로 규칙적으로 자르기 위헤 정규표현식을 사용하면 좋을 것 같았다. 물론 정규표현식을 사용하지 않으면, slice를 통해 특정 단위로 잘라서 비교하는 방법도 있지만 매번 어디서부터 자를지 기록하고 가져오는 것보다 한 번에 잘라두고 검사하는 것이 좋을 것 같았다. 

문제는 유동적으로 변화하는 특정 단위를 정규표현식으로 만들어야 했다. template literal 기법을 이용하면 변화하는 부분을 반영할 수 있지만, 일반적인 `/regex/option` 표기법은 사용할 수 없었고, RegExp 객체를 통해 인스턴스를 생성해야 했다. 여기서 생긴 또 다른 문제는 RegExp 객체를 이용하여 정규표현식을 만들어본 적이 많지 않아서 `\w` 특수기호를 사용할 때 \를 2번 써서 이스케이프를 해야함을 몰랐다. 때문에 처음에 match 메서드를 통해 정규표현식 매칭을 진행했을 때 null이 반환되었다. 원인을 찾는데 시간을 조금 써야했다.

2\) 🤔 문자열을 압축할 때, 중복되는 문자열을 어떻게 압축할까 고민되었다. 해답 코드를 보면 알 수 있지만, 보통 사람들이 일반적으로 생각하는 방법으로 풀었다. 더 깔끔하고 좋은 방법을 알아보고 싶어서 현재 다른 사람들의 코드를 살펴보고 있지만, 아직까지 만족하는 결과를 보지 못했다. 추후 발견하면 추가할 예정이다.