### 🔍 문제 링크
[Level2 **튜플** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/64065)

### 📘 문제 설명
셀수있는 수량의 순서있는 열거 또는 어떤 순서를 따르는 요소들의 모음을 튜플(tuple)이라고 합니다. n개의 요소를 가진 튜플을 n-튜플(n-tuple)이라고 하며, 다음과 같이 표현할 수 있습니다.

- (a1, a2, a3, ..., an)

튜플은 다음과 같은 성질을 가지고 있습니다.

1. 중복된 원소가 있을 수 있습니다. ex : (2, 3, 1, 2)
2. 원소에 정해진 순서가 있으며, 원소의 순서가 다르면 서로 다른 튜플입니다. ex : (1, 2, 3) ≠ (1, 3, 2)
3. 튜플의 원소 개수는 유한합니다.

원소의 개수가 n개이고, **중복되는 원소가 없는** 튜플 `(a1, a2, a3, ..., an)`이 주어질 때(단, a1, a2, ..., an은 자연수), 이는 다음과 같이 집합 기호 '{', '}'를 이용해 표현할 수 있습니다.

- {{a1}, {a1, a2}, {a1, a2, a3}, {a1, a2, a3, a4}, ... {a1, a2, a3, a4, ..., an}}

예를 들어 튜플이 (2, 1, 3, 4)인 경우 이는

- {{2}, {2, 1}, {2, 1, 3}, {2, 1, 3, 4}}

와 같이 표현할 수 있습니다. 이때, 집합은 원소의 순서가 바뀌어도 상관없으므로

- {{2}, {2, 1}, {2, 1, 3}, {2, 1, 3, 4}}
- {{2, 1, 3, 4}, {2}, {2, 1, 3}, {2, 1}}
- {{1, 2, 3}, {2, 1}, {1, 2, 4, 3}, {2}}

는 모두 같은 튜플 (2, 1, 3, 4)를 나타냅니다.

특정 튜플을 표현하는 집합이 담긴 문자열 s가 매개변수로 주어질 때, s가 표현하는 튜플을 배열에 담아 return 하도록 solution 함수를 완성해주세요.

### 📕 제한사항
- s의 길이는 5 이상 1,000,000 이하입니다.
- s는 숫자와 '{', '}', ',' 로만 이루어져 있습니다.
- 숫자가 0으로 시작하는 경우는 없습니다.
- s는 항상 중복되는 원소가 없는 튜플을 올바르게 표현하고 있습니다.
- s가 표현하는 튜플의 원소는 1 이상 100,000 이하인 자연수입니다.
- return 하는 배열의 길이가 1 이상 500 이하인 경우만 입력으로 주어집니다.

### 📙 입출력 예
|s|result|
|:---|:---|
|"{{2},{2,1},{2,1,3},{2,1,3,4}}"|[2, 1, 3, 4]|
|"{{1,2,3},{2,1},{1,2,4,3},{2}}"|[2, 1, 3, 4]|
|"{{20,111},{111}}"|[111, 20]|
|"{{123}}"|[123]|
|"{{4,2,3},{3},{2,3,4,1},{2,3}}"|[3, 2, 4, 1]|

### 📒 입출력 예 설명
**입출력 예 #1**  
문제 예시와 같습니다.

**입출력 예 #2**  
문제 예시와 같습니다.

**입출력 예 #3**  
(111, 20)을 집합 기호를 이용해 표현하면 {{111}, {111,20}}이 되며, 이는 {{20,111},{111}}과 같습니다.

**입출력 예 #4**  
(123)을 집합 기호를 이용해 표현하면 {{123}} 입니다.

**입출력 예 #5**  
(3, 2, 4, 1)을 집합 기호를 이용해 표현하면 {{3},{3,2},{3,2,4},{3,2,4,1}}이 되며, 이는 {{4,2,3},{3},{2,3,4,1},{2,3}}과 같습니다.

### 📔 나의 알고리즘 순서
1. 문자열 `s`를 파싱하여 배열로 가공한다.
2. 배열의 요소의 길이를 기준으로 오름차순으로 정렬한다.
3. 배열 요소 하나씩 접근하여 튜플에 들어갈 숫자를 하나 추출한다.  
  3-1. 이전 요소와 현재 요소를 비교하여 일치하지 않는 숫자 하나가 다음에 들어갈 튜플의 숫자이다.

※ 집합의 원소의 순서가 중요한게 아니라, 집합의 원소가 가지고 있는 숫자의 개수가 중요하다. 원소가 가진 숫자의 개수를 기준으로 나열하여, `{{a1}, {a1, a2}, {a1, a2, a3}, {a1, a2, a3, a4}, ... {a1, a2, a3, a4, ..., an}}` 구조로 만든다. 이후에 요소 하나씩 접근하여 튜플에 들어갈 숫자를 하나씩 추출하면 된다.

### ✅ 나의 해답코드
```javascript
function solution(s) {
    let answer = [];
    
    const sArray = s
        .slice(2, -2)
        .split('},{')
        .map(e => e.split(',').map(e => Number(e)))
        .sort((a, b) => a.length - b.length);
    
    sArray.forEach(e => {
        const copy = [...answer].sort();
        const target = e.sort();
        for(let i = 0; i< target.length; i++) {
            if(copy[i] !== target[i]) {
                answer.push(target[i]);
                break;
            }
        }
    });
    
    return answer;
}
```

### ✨ 깔끔한 해답코드
```javascript
// 1번 풀이
// JSON.parse를 이용하여 데이터 파싱 후 가공하는 방법
function solution(s) {
    return JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
    .sort((a, b) => a.length - b.length)
    .reduce((arr, v, n) => {
        if (n) {
            return arr.concat(v.filter(f => !arr.includes(f)));
        }
        return v;
    }, []);
}
```

```javascript
// 2번 풀이
// 정규표현식과 match를 통한 파싱 후 가공하는 방법
// Set 객체를 이용하여 중복을 제거하여 튜플 순서를 나열하는 방법
const solution = s => tupple(changeMatrix(getSets(s)));

const getSets = s => {
  const sets = s.match(/{[\d,]+}/g);
  return sets
    .map(set => set.match(/[\d]+,?/g).map(v => parseInt(v)))
    .sort((a, b) => a.length - b.length);
};

const changeMatrix = sets => sets.reduce((_, set) => _.concat(set), []);

const tupple = arr => [...arr.reduce((set, value) => set.add(value), new Set())];
```

### 📝고민한점 & 💡배운점
1\) 🤔 이번 문제에서 제일 고민한 점은 규칙적인 문자열을 어떻게 파싱하고, 원하는 데이터를 추출하기 위해 어떤 자료형으로 가공할지였다. 

처음엔 깔끔한 해답코드 1번 풀이처럼 JSON.parse를 이용할 수 있지 않을까 생각했다. 유사 배열 객체로 인식될까 기대하며 `JSON.parse(s)` 를 시도 했지만, 에러가 발생했다. 생각해보면 당연한게 `{}`를 통해 감싸지면 객체의 구조를 가져야하기 때문에 key와 value의 구조를 가져야한다. 유사배열객체라 할지라도 key엔 0~n까지의 문자열이 순서대로 들어가 있어야 했다.

다음으로 생각한 것은 직접 유사 배열 객체로 가공한 뒤에 JSON.parse를 이용하면 어떨까 생각했지만 오히려 유사 배열 객체로 만드는 것보다 있는 형태에서 `String.prototype.slice`와 `String.prototype.split`를 이용하는게 더 편한 것 같아 위와 같은 풀이가 나왔다.

이후에 다른 사람들 풀이를 보다가 **최외곽의 `{`와 `}`를 `[`로 `]`로 바꾸어주면 배열 형태로 JSON.parse를 쉽게 이용할 수 있음을 깨달았다.** 다음엔 활용할 수 있도록 해야겠다.

2\) 💡나의 경우 요소의 길이를 기준으로 오름차순으로 정렬한 뒤에, 튜플에 다음으로 들어갈 숫자가 무엇인지 찾기 위해 아래와 같이 비교해서 찾았다.

```javascript
sArray.forEach(e => {
    const copy = [...answer].sort();
    const target = e.sort();
    for(let i = 0; i< target.length; i++) {
        if(copy[i] !== target[i]) {
            answer.push(target[i]);
            break;
        }
    }
});
```

하지만 깔끔한 해답코드에서는 `Array.prototype.filter`와 `Array.prototype.includes` 메서드를 이용하여 다음에 들어갈 숫자를 찾아낸다. 효율성은 둘째치고 가독성 면에서 더 좋은 코드라는 생각을 했다. 다음에 비슷한 상황에서 활용할 수 있도록 기억해야겠다.

3\) 💡깔끔한 해답코드 1번 풀이의 댓글을 통해 `String.prototype.replace` 프로토타입 함수의 2번째 인자로 replacer 함수를 넘겨줄 수 있음을 알게 되었다. 이를 활용하면 `s.replace(/{/g, '[').replace(/}/g, ']')`처럼 replace 함수를 2번 활용하지 않고 `{`일 땐 `[`로 `}`일 땐 `]`로 치환하도록 구성할 수 있다고 한다.

```javascript
function replacer(match, p1, p2, /* …, */ pN, offset, string, groups) {
  return replacement;
}
```

replacer 함수는 위와 같이 가변인자로 구현할 수 있고, p1~pN은 소그룹 묶어서 나오는 대상을 받는다. 이를 활용한 예제는 아래와 같다. 자세한 내용은 MDN 문서를 통해 더 알아보면 좋다.

```javascript
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString); // abc - 12345 - #$*%
```

4\) 💡깔끔한 해답코드 2번 풀이에서 Set 객체를 통해 중복을 제거한 뒤, spread 문법으로 나열하면 튜플의 순서대로 나온다는 것을 알 수 있다. Set 객체의 경우 중복 데이터를 허용하지 않고, 저장된 순서를 유지해준다는 점을 활용한 멋진 풀이라고 생각한다. 단 문제에서 언급한 것처럼 **중복되는 원소가 없는튜플 `(a1, a2, a3, ..., an)`이 주어질 때**와 같은 조건이 붙어있을 때 사용할 수 있겠다.

### 🔍참고 내용
[String.prototype.replace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)