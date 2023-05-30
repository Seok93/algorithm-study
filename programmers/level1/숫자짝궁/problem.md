### 🔍 문제 링크
[Level **숫자 짝궁** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/131128)

### 📘 문제 설명
두 정수 `X`, `Y`의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). `X`, `Y`의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. `X`, `Y`의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.

예를 들어, `X` = 3403이고 `Y` = 13203이라면, `X`와 `Y`의 짝꿍은 `X`와 `Y`에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다. 다른 예시로 `X` = 5525이고 `Y` = 1255이면 `X`와 `Y`의 짝꿍은 `X`와 `Y`에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다(`X`에는 5가 3개, `Y`에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)

두 정수 `X`, `Y`가 주어졌을 때, `X`, `Y`의 짝꿍을 return하는 solution 함수를 완성해주세요.

### 📕 제한사항
- 3 ≤ `X`, `Y`의 길이(자릿수) ≤ 3,000,000입니다.
- `X`, `Y`는 0으로 시작하지 않습니다.
- `X`, `Y`의 짝꿍은 상당히 큰 정수일 수 있으므로, 문자열로 반환합니다.

### 📙 입출력 예
|X|Y|result|
|:---|:---|:---|
|"100"|"2345"|"-1"|
|"100"|"203045"|"0"|
|"100"|"123450"|"10"|
|"12321"|"42531"|"321"|
|"5525"|"1255"|"552"|

### 📒 입출력 예 설명
**입출력 예 #1**  
- `X`, `Y`의 짝꿍은 존재하지 않습니다. 따라서 "-1"을 return합니다.

**입출력 예 #2**  
- `X`, `Y`의 공통된 숫자는 0으로만 구성되어 있기 때문에, 두 수의 짝꿍은 정수 0입니다. 따라서 "0"을 return합니다.

**입출력 예 #3**  
- `X`, `Y`의 짝꿍은 10이므로, "10"을 return합니다.

**입출력 예 #4**  
- `X`, `Y`의 짝꿍은 321입니다. 따라서 "321"을 return합니다.

**입출력 예 #5**  
- 지문에 설명된 예시와 같습니다.

### 📔 나의 알고리즘 순서
1) `X`, `Y`의 숫자를 개수를 Map에 저장하여 구분한다.  
2) `X`, `Y`에 공통된 숫자를 모두 추출한다. (= 짝궁 추출)  
3) 짝궁으로 만들 수 있는 최대값을 구한다.  
  3-1) 짝궁이 아예 없다면, "-1"을 반환한다.  
  3-2) 짝궁이 0으로만 구성되어 있다면, "0"을 반환한다.  

### ✅ 나의 해답코드
```javascript
function solution(X, Y) {
  let pair = '';
  const x = new Map();
  const y = new Map();

  for (let i = 0; i < 10; i++) {
    x.set(`${i}`, 0);
    y.set(`${i}`, 0);
  }

  [...X].forEach((elem) => x.set(elem, x.get(elem) + 1));
  [...Y].forEach((elem) => y.set(elem, y.get(elem) + 1));

  x.forEach((xValue, key) => {
    const yValue = y.get(key);
    const count = xValue > yValue ? yValue : xValue;
    pair += key.repeat(count);
  });

  pair = pair.length > 0 ? [...pair].sort((a, b) => b - a).join('') : '-1';
  pair = /[1-9]/.test(pair) ? pair : '0';

  return pair;
}
```

### ✨ 깔끔한 해답코드
```javascript
function solution(X, Y) {
    let answer = '';
    const xHash = new Map();
    const yHash = new Map();
    
    [...X].forEach(elem => xHash.set(elem, xHash.has(elem) ? xHash.get(elem)  +1 : 1));
    [...Y].forEach(elem => yHash.set(elem, yHash.has(elem) ? yHash.get(elem) +1 : 1));
    
    for(let i = 9; i >= 0; i --){
        const index = i.toString();
        if(!xHash.has(index)) continue;
        if(!yHash.has(index)) continue;

        const num = Math.min(xHash.get(index), yHash.get(index))
        answer += index.repeat(num)
    }
    if(answer.length === 0) return '-1'
    if(answer[0] === '0' ) return '0';
    
    return answer;
}
```

### 📝고민한점 & 배운점
**1\) 🤔같은 숫자를 원하는 횟수만큼 반복적으로 넣는 로직을 이쁘게 표현하는 방법이 있을까?**   
처음에는 `pair`를 배열로 선언하였고, 같은 숫자를 짝궁의 개수만큼 배열에 넣어줘야 했다. while문 또는 Array.prototype.fill 메서드를 이용하는 방법이 제일 처음 생각났는데, 뭔가 더 이쁘게 표현할 방법이 있을 것 같았다.

고민하던 끝에 **String.prototype.repeat 메서드를 이용하면 같은 숫자를 원하는만큼 반복해서 붙일 수 있고, 이터레이터 특성을 이용하여 spread를 통해 배열로 바꿔주면 된다고 생각했다.**

```javascript
// String.prototype.repeat 메서드와 spread를 통해 배열을 만드는 방법
const pair = "";
...
x.forEach((xValue, key) => {
  const yValue = y.get(key);
  const count = xValue > yValue ? yValue : xValue;
  pair += key.repeat(count);
});
pair = [...pair];
```

**2\) 🤔"0000" 같이 0이 여러 개일 때 "0"으로 나오는 로직을 이쁘게 표현하는 방법이 없을까?**  
문제의 조건에 의해 "0000"과 같이 0이 반복되면 결과값으로 "0"을 반환해야 했다. 좋은 방법이 바로 떠오르지 않아 고민하다가 `/1-9/` 정규표현식을 통해 0이외의 숫자가 포함되어 있으면 그대로 반환하고, 0만 있다면 "0"을 반환하도록 만들었다.

그러다 문득 **"0000"을 숫자 타입으로 바꿨다가 문자열 타입으로 변경하면, 다른 숫자가 섞여있으면 보존되고, 0만 있을 경우엔 0이 반환된다는 점을 깨달았다.**