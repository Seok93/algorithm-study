### 🔍 문제 링크
[Level **옹알이 (2)** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/133499)

### 📘 문제 설명
머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다. 문자열 배열 `babbling`이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

### 📕 제한사항
- 1 ≤ `babbling`의 길이 ≤ 100
- 1 ≤ `babbling[i]`의 길이 ≤ 30
- 문자열은 알파벳 소문자로만 이루어져 있습니다.

### 📙 입출력 예
|babbling|result|
|:---|:---|
|["aya", "yee", "u", "maa"]|1|
|["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]|2|

### 📒 입출력 예 설명
**입출력 예 #1**
- ["aya", "yee", "u", "maa"]에서 발음할 수 있는 것은 "aya"뿐입니다. 따라서 1을 return합니다.

**입출력 예 #2**
- ["ayaye", "uuuma", "yeye", "yemawoo", "ayaayaa"]에서 발음할 수 있는 것은 "aya" + "ye" = "ayaye", "ye" + "ma" + "woo" = "yemawoo"로 2개입니다. "yeye"는 같은 발음이 연속되므로 발음할 수 없습니다. 따라서 2를 return합니다.

### 📔 나의 알고리즘 순서
1) 단어를 하나 가져와, 문자 하나씩 가져와 queue에 저장한다.  
2) queue에 저장된 문자의 길이가 옹알이 단어의 최대 길이를 넘어갔나 확인한다.  
   2-1) 넘어갔다면, 매칭되는 옹알이 단어가 없으므로 해당 단어는 옹알이할 수 없다. (종료)  
   2-2) 넘어가지 않았다면, 다음 순서를 실행한다.
3) queue에 저장한 문자들이 옹알이 단어와 일치하는지 확인한다.  
   3-1) 일치한다면, queue를 비워준다.  
   3-2) 일치하지 않는다면, 1번부터 다시 반복한다.
4) queue에 단어가 남았는지 확인한다.  
   4-1) 남았다면, 옹알이 단어와 일치하지 않았으니 그대로 종료한다.  
   4-2) 남지 않았다면, 옹알이 단어와 일치했으니 answer을 +1 해준다.

### ✅ 나의 해답코드
```javascript
function solution(babbling) {
  let answer = 0;
  const BABY_LANGUAGE = ['aya', 'ye', 'woo', 'ma'];
  const MAX_LEN = Math.max(...BABY_LANGUAGE.map((elem) => elem.length));

  babbling.forEach((word) => {
    const queue = [];
    let lastWord = '';
    for (const c of word) {
      queue.push(c);
      if (queue.length > MAX_LEN) break;
      if (queue.join('') !== lastWord && BABY_LANGUAGE.includes(queue.join(''))) {
        lastWord = queue.slice().join('');
        queue.splice(0, queue.length);
      }
    }
    if (queue.length === 0) answer++;
  });

  return answer;
}
```

### ✨ 깔끔한 해답코드
```javascript
// 정규 표현식을 이용한 풀이
function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce((ans, word) => (
    !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
  ), 0);
}
```

```javascript
// 정규 표현식을 이용한 풀이2
function solution(babbling) {
    let reg = new RegExp("^(aya(?!(aya))|ye(?!(ye))|woo(?!(woo))|ma(?!(ma)))+$");
    return babbling.reduce((acc, cur) => {
        return reg.test(cur) ? acc + 1 : acc;
    }, 0);
}
```

```javascript
// 문자열 replaceAll, replace를 통한 제거
// 중복 단어 검사 등은 깔끔한 방법은 아니라고 생각하지만
// 원하는 단어를 숫자로 치환해서 걸러내는 방법은 재미있는 아이디어라고 생각했다.
function solution(babbling) {
    let count = 0;
    let dup = ['ayaaya', 'yeye', 'woowoo', 'mama'];
    while (babbling.length) {
        let b = babbling.pop();
        if (dup.some(v=>b.includes(v))) continue;
        b = b.replaceAll('aya','1').replaceAll('ye','2').replaceAll('woo','3').replaceAll('ma','4');
        b = b.replace(/[1234]/g, '');
        if (b.length === 0) count++;
    }

    return count;
}
```


### 📝고민한점 & 배운점
**1\) 🤔 정규표현식을 자주 사용하지 않아, 매번 필요할 때마다 찾아보게 되는 문제가 있다. 이번에 잘 정리해서 찾더라도 금방 이해하고 사용할 수 있도록 해야겠다.**

#### **정규표현식이란?**
정규표현식(Regular Express, regex)은 데이터를 찾거나, 데이터 규칙을 준수하는지 등을 확인할 때 유용하게 사용할 수 있는 방법이다. 정규표현식은 크게 3가로 구성되어 있다.

#### **<span style="color:#5050F0">/<span style="color: #F05050">regex</span>/<span style="color: #F070F0">i</span></span>**

1\) Slashes (/): 패턴의 **시작과 끝**을 알린다.  
2\) Pattern (regex): 찾고자하는 **패턴 표시**  
3\) Flag (i): 패턴 검사시 사용할 **옵션 표시**

#### **문법 정리**
**Assertions: Boundary-type assertions**
|Character|의미|비고|
|:---|:---|:---|
|^|문장의 시작 매칭||
|$|문장의 끝 매칭||
|\b|

**Character Classes**
|Character|의미|비고|
|:---|:---|:---|
| \ | 특수 문자 escape용 |  |
| . | 어떤 문자 (줄바꿈 문자 제외) |  |
| \d | digit 숫자 | |
| \D | digit 숫자가 아닌 것 | |
| \w | word 문자 | |
| \W | word 문자가 아닌 것| |
| \s | space 공백 | |
| \S | space 공백 문자가 아닌 것 | |


**Groups and backreferences**
|Character|의미|비고|
|:---|:---|:---|
| \| | 또는 | |
| ( ) | 소그룹 | |
| [ ] | 문자셋, 괄호 안의 어떤 문자든 만족할 때 | |
| [^] | 부정 문자셋, 괄호 안의 어떤 문자가 아닐 떼 | |

**Quantifiers**
|Character|의미|비고|
|:---|:---|:---|
| ? | 0 또는 1개일 때 (zero or one)| |
| * | 0개 이상일 때 (zero or more) | |
| + | 1개 이상일 때 (one or more)  | |
| {n} | n번 반복할 때 | |
| {min,} | 최소 min번 반복할 때 | |
| {min, max} | 최소 min번, 최대 max 번 반복할 때 | |


#### **참고 자료**
1\) [MDN: 정규표현식](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions)  
2\) [JAVASCRIPT.INFO: 정규표현식](https://ko.javascript.info/regular-expressions)