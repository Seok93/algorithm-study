### 🔍 문제 링크
[Level1 **개인정보 수집 유효기간** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/150370)

### 📘 문제 설명
고객의 약관 동의를 얻어서 수집된 1~`n`번으로 분류되는 개인정보 `n`개가 있습니다. 약관 종류는 여러 가지 있으며 각 약관마다 개인정보 보관 유효기간이 정해져 있습니다. 당신은 각 개인정보가 어떤 약관으로 수집됐는지 알고 있습니다. 수집된 개인정보는 유효기간 전까지만 보관 가능하며, 유효기간이 지났다면 반드시 파기해야 합니다.

예를 들어, A라는 약관의 유효기간이 12 달이고, 2021년 1월 5일에 수집된 개인정보가 A약관으로 수집되었다면 해당 개인정보는 2022년 1월 4일까지 보관 가능하며 2022년 1월 5일부터 파기해야 할 개인정보입니다.
당신은 오늘 날짜로 파기해야 할 개인정보 번호들을 구하려 합니다.

**모든 달은 28일까지 있다고 가정합니다.**

다음은 오늘 날짜가 `2022.05.19`일 때의 예시입니다.

|약관 종류|유효기간|
|:---|:---|
|A|6 달|
|B|12 달|
|C|3 달|

|번호|개인정보 수집 일자|약관 종류|
|:---|:---|:---|
|1|2021.05.02|A|
|2|2021.07.01|B|
|3|2022.02.19|C|
|4|2022.02.20|C|

- 첫 번째 개인정보는 A약관에 의해 2021년 11월 1일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다.
  
- 두 번째 개인정보는 B약관에 의해 2022년 6월 28일까지 보관 가능하며, 유효기간이 지나지 않았으므로 아직 보관 가능합니다.
  
- 세 번째 개인정보는 C약관에 의해 2022년 5월 18일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다.
  
- 네 번째 개인정보는 C약관에 의해 2022년 5월 19일까지 보관 가능하며, 유효기간이 지나지 않았으므로 아직 보관 가능합니다.
따라서 파기해야 할 개인정보 번호는 [1, 3]입니다.

오늘 날짜를 의미하는 문자열 `today`, 약관의 유효기간을 담은 1차원 문자열 배열 `terms`와 수집된 개인정보의 정보를 담은 1차원 문자열 배열 `privacies`가 매개변수로 주어집니다. 이때 파기해야 할 개인정보의 번호를 오름차순으로 1차원 정수 배열에 담아 return 하도록 solution 함수를 완성해 주세요.

### 📕 제한사항
- `today`는 "`YYYY`.`MM`.`DD`" 형태로 오늘 날짜를 나타냅니다.
- 1 ≤ `terms`의 길이 ≤ 20
  - `terms`의 원소는 "`약관 종류` `유효기간`" 형태의 `약관 종류`와 `유효기간`을 공백 하나로 구분한 문자열입니다.
  - `약관 종류`는 `A`~`Z`중 알파벳 대문자 하나이며, `terms`배열에서 `약관 종류`는 중복되지 않습니다.
  - `유효기간`은 개인정보를 보관할 수 있는 달 수를 나타내는 정수이며, 1 이상 100 이하입니다.
- 1 ≤ `privacies`의 길이 ≤ 100
  - `privacies[i]`는 `i+1`번 개인정보의 수집 일자와 약관 종류를 나타냅니다.
  - `privacies`의 원소는 "`날짜` `약관 종류`" 형태의 `날짜`와 `약관 종류`를 공백 하나로 구분한 문자열입니다.
  - `날짜`는 "`YYYY`.`MM`.`DD`" 형태의 개인정보가 수집된 날짜를 나타내며, today 이전의 날짜만 주어집니다.
  - `privacies`의 `약관 종류`는 항상 `terms`에 나타난 `약관 종류`만 주어집니다.
- `today`와 `privacies`에 등장하는 `날짜`의 `YYYY`는 연도, `MM`은 월, `DD`는 일을 나타내며 점(`.`) 하나로 구분되어 있습니다.
  - 2000 ≤ `YYYY` ≤ 2022
  - 1 ≤ `MM` ≤ 12
  - `MM`이 한 자릿수인 경우 앞에 0이 붙습니다.
  - 1 ≤ `DD` ≤ 28
  - `DD`가 한 자릿수인 경우 앞에 0이 붙습니다.
- 파기해야 할 개인정보가 하나 이상 존재하는 입력만 주어집니다.

### 📙 입출력 예
|today|terms|privacies|result|
|:---|:---|:---|:---|
|"2022.05.19"|["A 6", "B 12", "C 3"]|["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]|[1, 3]|
|"2020.01.01"|["Z 3", "D 5"]|["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]|[1, 4, 5]|

### 📒 입출력 예 설명
**입출력 예 #1**
  - 문제 예시와 같습니다.
  
**입출력 예 #2**
|약관 종류|유효기간|
|:---|:---|
|Z|3 달|
|D|5 달|

|번호|개인정보 수집 일자|약관 종류|
|:---|:---|:---|
|1|2019.01.01|D|
|2|2019.11.15|Z|
|3|2019.08.02|D|
|4|2019.07.01|D|
|5|2018.12.28|Z|

오늘 날짜는 2020년 1월 1일입니다.

- 첫 번째 개인정보는 D약관에 의해 2019년 5월 28일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다
  
- 두 번째 개인정보는 Z약관에 의해 2020년 2월 14일까지 보관 가능하며, 유효기간이 지나지 않았으므로 아직 보관 가능합니다.
  
- 세 번째 개인정보는 D약관에 의해 2020년 1월 1일까지 보관 가능하며, 유효기간이 지나지 않았으므로 아직 보관 가능합니다.
  
- 네 번째 개인정보는 D약관에 의해 2019년 11월 28일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다.
  
- 다섯 번째 개인정보는 Z약관에 의해 2019년 3월 27일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다.

### 📔 나의 알고리즘 순서
1) 약관 종류에 따른 보관 기간을 정리한다.
2) 개인정보 배열을 순회하며 삭제 대상인지 확인한다.
   2-1) 개인정보 하나를 가져와서, 수집일자와 약관 종류로 분리한다.
   2-2) 약관 종류에 따라 보관하는 기간을 계산한다.
   2-3) 만료일이 지난 개인정보라면 제거 대상이므로, 자기의 순서를 반환한다.

### ✅ 나의 해답코드
```javascript
function solution(today, terms, privacies) {
  const answer = [];
  const contracts = new Map();

  terms.forEach((term) => {
    const [type, period] = term.split(' ');
    contracts.set(type, Number(period));
  });

  privacies.forEach((private, index) => {
    const [date, type] = private.split(' ');
    let [year, month, day] = date.split('.').map((elem) => Number(elem));
    const period = contracts.get(type);

    month += period;
    if (--day === 0) {
      month -= 1;
      day = 28;
    }

    year += Math.floor(month / 12);
    month = month % 12;
    if (month === 0) {
      year -= 1;
      month = 12;
    }

    const current = new Date(today);
    const expriation = new Date([year, month, day].join('.'));

    current > expriation && answer.push(index + 1);
  });

  return answer;
}
```

### ✨ 깔끔한 해답코드
```javascript
function solution(today, terms, privacies) {
  const answer = [];
  const [year, month, date] = today.split(".").map(Number);
  const todates = year * 12 * 28 + month * 28 + date;
  const t = {};

  terms.forEach((e) => {
    let [a, b] = e.split(" ");
    t[a] = Number(b);
  });
  
  privacies.forEach((e, i) => {
    let [day, term] = e.split(" ");
    day = day.split(".").map(Number);
    const dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;
    if (dates <= todates) answer.push(i + 1);
  });
  return answer;
}
```

```javascript
function solution(today, terms, privacies) {
    const map = new Map();
    for (let i = 0; i < terms.length; i++) {
        const [type, term] = terms[i].split(' ');
        map.set(type, term * 28);
    }

    return privacies.reduce((acc, curr, i) => {
        const [date, type] = curr.split(' ');
        const [cy, cm, cd] = date.split('.');
        const [ty, tm, td] = today.split('.');

        const currentDays = +cy * 12 * 28 + +cm * 28 + +cd;
        const todayDays = +ty * 12 * 28 + +tm * 28 + +td;

        if (todayDays - currentDays >= map.get(type)) acc.push(i + 1);
        return acc;
    }, []);
}
```


### 📝고민한점 & 배운점
**1\) 💡 문제의 조건에 월별 날짜를 동일하게 제한한다면, 일(day)로 치환하여 계산하면 편하다.**  
이번 문제는 모든 달의 날짜를 28일로 제한하여, 일(day)로 환산하여 계산하면 편하다
```javascript
const dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;
```

평소라면 월별 일수를 배열로 저장하고, 윤년의 경우를 나눠서 연산을 진행했을 것 같다.

**2\) 🤔 문자열 그대로 날짜 비교가 가능할까? 아니면 Date객체로 변환하여 비교해야할까?**  
① 결론부터 말하자면, `JS는 비교 연산자를 통해 문자열의 사전적 순서를 판별할 수 있다`. 즉 같은 날짜 형식으로 들어가 있는 문자열을 비교한다면, 앞 문자부터 순차적으로 비교하기 때문에 날짜를 비교할 수 있다. 하지만 정확한 의미의 날짜 비교는 아니기 때문에, 날짜를 비교할 때엔 Date 객체로 치환하여 비교하는게 더 안전하고 정확하다.

② `Date 객체는 비교 연산자를 통해 직접적으로 비교할 수 있다.`   
이외에는 아래의 방법을 사용할 수도 있다.
 - Date 객체의 프로토타입 메서드 `getTime()`를 이용하는 방법
 - Object 객체의 프로토타입 메서드 `valueOf()`를 이용하는 방법
 - Number 원시 래퍼 객체를 이용하여 `Number()`를 이용하는 방법
 - 암묵적 형변환 단항연산자 `+`기호를 이용하는 방법