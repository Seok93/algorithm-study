### 🔍 문제 링크
[Level2 **\[1차\] 뉴스 클러스터링** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/17677?language=javascript)

### 📘 문제 설명
여러 언론사에서 쏟아지는 뉴스, 특히 속보성 뉴스를 보면 비슷비슷한 제목의 기사가 많아 정작 필요한 기사를 찾기가 어렵다. Daum 뉴스의 개발 업무를 맡게 된 신입사원 튜브는 사용자들이 편리하게 다양한 뉴스를 찾아볼 수 있도록 문제점을 개선하는 업무를 맡게 되었다.

개발의 방향을 잡기 위해 튜브는 우선 최근 화제가 되고 있는 "카카오 신입 개발자 공채" 관련 기사를 검색해보았다.

- 카카오 첫 공채..'블라인드' 방식 채용
- 카카오, 합병 후 첫 공채.. 블라인드 전형으로 개발자 채용
- 카카오, 블라인드 전형으로 신입 개발자 공채
- 카카오 공채, 신입 개발자 코딩 능력만 본다
- 카카오, 신입 공채.. "코딩 실력만 본다"
- 카카오 "코딩 능력만으로 2018 신입 개발자 뽑는다"

기사의 제목을 기준으로 "블라인드 전형"에 주목하는 기사와 "코딩 테스트"에 주목하는 기사로 나뉘는 걸 발견했다. 튜브는 이들을 각각 묶어서 보여주면 카카오 공채 관련 기사를 찾아보는 사용자에게 유용할 듯싶었다.

유사한 기사를 묶는 기준을 정하기 위해서 논문과 자료를 조사하던 튜브는 "자카드 유사도"라는 방법을 찾아냈다.

자카드 유사도는 집합 간의 유사도를 검사하는 여러 방법 중의 하나로 알려져 있다. 두 집합 `A`, `B` 사이의 자카드 유사도 `J(A, B)`는 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값으로 정의된다.

예를 들어 집합 `A` = {1, 2, 3}, 집합 `B` = {2, 3, 4}라고 할 때, 교집합 `A ∩ B` = {2, 3}, 합집합 `A ∪ B` = {1, 2, 3, 4}이 되므로, 집합 `A`, `B` 사이의 자카드 유사도 `J(A, B)` = 2/4 = 0.5가 된다. 집합 A와 집합 B가 모두 공집합일 경우에는 나눗셈이 정의되지 않으니 따로 `J(A, B)` = 1로 정의한다.

자카드 유사도는 원소의 중복을 허용하는 다중집합에 대해서 확장할 수 있다. 다중집합 `A`는 원소 "1"을 3개 가지고 있고, 다중집합 `B`는 원소 "1"을 5개 가지고 있다고 하자. 이 다중집합의 교집합 `A ∩ B`는 원소 "1"을 min(3, 5)인 3개, 합집합 `A ∪ B`는 원소 "1"을 max(3, 5)인 5개 가지게 된다. 다중집합 `A` = {1, 1, 2, 2, 3}, 다중집합 `B` = {1, 2, 2, 4, 5}라고 하면, 교집합 `A ∩ B` = {1, 2, 2}, 합집합 `A ∪ B` = {1, 1, 2, 2, 3, 4, 5}가 되므로, 자카드 유사도 `J(A, B)` = 3/7, 약 0.42가 된다.

이를 이용하여 문자열 사이의 유사도를 계산하는데 이용할 수 있다. 문자열 "FRANCE"와 "FRENCH"가 주어졌을 때, 이를 두 글자씩 끊어서 다중집합을 만들 수 있다. 각각 {FR, RA, AN, NC, CE}, {FR, RE, EN, NC, CH}가 되며, 교집합은 {FR, NC}, 합집합은 {FR, RA, AN, NC, CE, RE, EN, CH}가 되므로, 두 문자열 사이의 자카드 유사도 J("FRANCE", "FRENCH") = 2/8 = 0.25가 된다.

### 📕 제한사항
**입력형식**  
- 입력으로는 str1과 str2의 두 문자열이 들어온다. 각 문자열의 길이는 2 이상, 1,000 이하이다.
- 입력으로 들어온 문자열은 두 글자씩 끊어서 다중집합의 원소로 만든다. 이때 영문자로 된 글자 쌍만 유효하고, 기타 공백이나 숫자, 특수 문자가 들어있는 경우는 그 글자 쌍을 버린다. 예를 들어 "ab+"가 입력으로 들어오면, "ab"만 다중집합의 원소로 삼고, "b+"는 버린다.
- 다중집합 원소 사이를 비교할 때, 대문자와 소문자의 차이는 무시한다. "AB"와 "Ab", "ab"는 같은 원소로 취급한다.

**출력 형식**  
- 입력으로 들어온 두 문자열의 자카드 유사도를 출력한다. 유사도 값은 0에서 1 사이의 실수이므로, 이를 다루기 쉽도록 65536을 곱한 후에 소수점 아래를 버리고 정수부만 출력한다.

### 📙 입출력 예
|str1|str2|answer|
|:---|:---|:---|
|FRANCE|french|16384|
|handshake|shake hands|65536|
|aa1+aa2|AAAA12|43690|
|E=M*C^2|e=m*c^2|65536|

### 📔 나의 알고리즘 순서
1. 주어진 문자열을 두 글자씩 끊어서 다중집합의 원소로 만든다
   - 영문자만 가능, 이외의 문자가 있다면 제외할 것
   - 대소문자를 구별하지 않으므로, 모두 소문자로 만들어서 추출할 것
2. Map객체를 이용하여 같은 문자의 개수를 정리한다.
3. 교집합의 개수를 구한다.
   - Map의 key를 이용하여 `A`집합과 `B`집합의 각각의 개수를 추출한 뒤 `min(A, B)`를 통해 공통 개수 추출
4. 교집합을 통해 합집합을 구한다.
   - 합집합: `A`집합 + `B`집합 - `A ∩ B`교집합
5. 교집합과 차집합을 구해 유사도를 구한다.
   - 유사도 = 교집합 / 차집합 * 65536 (소수점은 버릴 것)

### ✅ 나의 해답코드
```javascript
function strToSet(str) {
  const set = [];
  for (let i = 0; i < str.length - 1; i++) {
    const regex = /^[a-zA-Z]+$/;
    const target = str.slice(i, i + 2);
    if (regex.test(target)) set.push(target.toLowerCase());
  }
  return set;
}

function solution(str1, str2) {
  const set1 = strToSet(str1);
  const set2 = strToSet(str2);
  const map1 = new Map();
  const map2 = new Map();

  if (set1.length === 0 && set2.length === 0) return 65536;

  set1.forEach((str) => map1.set(str, (map1.get(str) || 0) + 1));
  set2.forEach((str) => map2.set(str, (map2.get(str) || 0) + 1));

  let common = 0;
  let total = 0;
  for (const [key, value] of map1) {
    const value2 = map2.has(key) ? map2.get(key) : 0;
    common += Math.min(...[value, value2]);
  }
  total = set1.length + set2.length - common;

  return Math.floor((common / total) * 65536);
}

```

### ✨ 깔끔한 해답코드
```javascript
// Math.min과 Math.max를 이용하여 교집합과 합집합을 구하는 방법
function explode(text) {
  const result = [];
  for (let i = 0; i < text.length - 1; i++) {
    const node = text.substr(i, 2);
    if (node.match(/[A-Za-z]{2}/)) {
      result.push(node.toLowerCase());
    }
  }
  return result;
}

function solution (str1, str2) {
  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);

  let union = 0;
  let intersection = 0;
  set.forEach(item => {
    const has1 = arr1.filter(x => x === item).length;
    const has2 = arr2.filter(x => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });

  return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}
```

### 📝고민한점 & 💡배운점
1\) 🤔 문제를 읽으면서, 이번 문제의 핵심은 크게 2가지라고 생각했다.
```
핵심 1. 문자열을 원하는 길이로 부분적으로 잘라낸 뒤, 특정 규칙을 준수하는 substring의 데이터 집합을 만들 것
핵심 2. 데이터 가공으로 만들어진 두 데이터 집합의 교집합과 합집합을 구할 것
```

핵심 1번의 경우 String 객체의 내장 메서드와 정규표현식을 사용하면 비교적 간단하게 해결할 수 있었다. 문제는 핵심 2번으로, 1번을 통해 나온 데이터 집합 2개를 비교하여 교집합과 합집합을 구하는 것이었다. 집합에는 중복되는 데이터가 존재하기에, 비교하기 편하게 중복된 데이터가 몇개씩 존재하는지 개수로 묶을 필요가 있었다. 중복데이터를 제거하는 방법으로 각각의 집합을 Map객체를 사용하여 개수를 통합하였다.

이후에 `A ∩ B`교집합을 구하기 위해 공통된 원소를 추출해야했다. 공통 부분이기 때문에 두 개의 Map객체 중 어느 것을 기준으로 하든 상관이 없었다. 한 쪽 Map의 key를 이용하여 두 Map 집합의 개수를 추출하여 `min(A, B)`를 통해 공통 개수를 추출했다.

`A ∪ B`합집합은 `A`집합 + `B`집합 - `A ∩ B`교집합 공식으로 구할 수 있으므로 수학공식을 이용하여 추출했다.

2\) 💡다른 사람 문제 풀이를 구경하던 중, 깔끔한 해답코드에 적어둔 코드를 읽게 되었다. 기본적인 데이터 가공 부분은 나와 비슷하지만, 교집합과 합집합을 구하는 부분이 참심하고 재미있었다.

```
1. 두 개의 집합을 Set객체를 통해 중복을 제거하여 나올 수 있는 모든 원소를 정리한다.
2. Set.prototype.forEach 메서드를 통해 원소 하나씩 접근하여 각각 A집합과 B집합에서 몇개가 나오는지 추출한다.
3. Math.min 메서드를 이용하여 교집합으로 나올 수 있는 공통 개수를 추출한다.
4. Math.max 메서드를 이용하여 합집합으로 결합 시 나올 수 있는 최대 원소 개수를 추출한다.
5. Set으로 정리한 모든 원소를 순회할 때까지 1~4를 반복한다.
```

`Math.min` 메서드로 공통 개수를 추출하는 것은 생각했지만, `Math.max` 메서드로 합집합으로 만들 때 나올 수 있는 원소의 최대 개수를 구한다는 생각은 문제를 풀 당시엔 하지 못했다. 참 재미있는 아이디어라고 생각한다. 다음에 교집합과 합집합을 구할 때 사용해봐야겠다.

P.S. 이후에 문제 설명에 참신하다고 생각한 아이디어가 설명되어 있음을 깨달았다💦
> 다중집합 A는 원소 "1"을 3개 가지고 있고, 다중집합 B는 원소 "1"을 5개 가지고 있다고 하자.   
> 이 다중집합의 교집합 A ∩ B는 원소 "1"을 min(3, 5)인 3개, 합집합 A ∪ B는 원소 "1"을 max(3, 5)인 5개 가지게 된다.

### 🔍참고 자료
[2018  KAKAO BLIND RECRUITMENT 문제 해설](https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/)