### 🔍 문제 링크
[Level3 **보석 쇼핑** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/67258)

### 📘 문제 설명
[본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]

개발자 출신으로 세계 최고의 갑부가 된 `어피치`는 스트레스를 받을 때면 이를 풀기 위해 오프라인 매장에 쇼핑을 하러 가곤 합니다.
어피치는 쇼핑을 할 때면 매장 진열대의 특정 범위의 물건들을 모두 싹쓸이 구매하는 습관이 있습니다.
어느 날 스트레스를 풀기 위해 보석 매장에 쇼핑을 하러 간 어피치는 이전처럼 진열대의 특정 범위의 보석을 모두 구매하되 특별히 아래 목적을 달성하고 싶었습니다.
`진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 가장 짧은 구간을 찾아서 구매`

예를 들어 아래 진열대는 4종류의 보석(RUBY, DIA, EMERALD, SAPPHIRE) 8개가 진열된 예시입니다.

|진열대 번호|1|2|3|4|5|6|7|8|
|:---|:---|:---|:---|:---|:---|:---|:---|:---|
|보석 이름|DIA|RUBY|RUBY|DIA|DIA|EMERALD|SAPPHIRE|DIA|

진열대의 3번부터 7번까지 5개의 보석을 구매하면 모든 종류의 보석을 적어도 하나 이상씩 포함하게 됩니다.

진열대의 3, 4, 6, 7번의 보석만 구매하는 것은 중간에 특정 구간(5번)이 빠지게 되므로 어피치의 쇼핑 습관에 맞지 않습니다.

진열대 번호 순서대로 보석들의 이름이 저장된 배열 gems가 매개변수로 주어집니다. 이때 모든 보석을 하나 이상 포함하는 가장 짧은 구간을 찾아서 return 하도록 solution 함수를 완성해주세요.

가장 짧은 구간의 `시작 진열대 번호`와 `끝 진열대 번호`를 차례대로 배열에 담아서 return 하도록 하며, 만약 가장 짧은 구간이 여러 개라면 `시작 진열대 번호`가 가장 작은 구간을 return 합니다.

### 📕 제한사항
- gems 배열의 크기는 1 이상 100,000 이하입니다.
  - gems 배열의 각 원소는 진열대에 나열된 보석을 나타냅니다.
  - gems 배열에는 1번 진열대부터 진열대 번호 순서대로 보석이름이 차례대로 저장되어 있습니다.
  - gems 배열의 각 원소는 길이가 1 이상 10 이하인 알파벳 대문자로만 구성된 문자열입니다.

### 📙 입출력 예
|gems|result|
|:---|:---|
|["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]|[3, 7]|
|["AA", "AB", "AC", "AA", "AC"]|[1, 3]|
|["XYZ", "XYZ", "XYZ"]|[1, 1]|
|["ZZZ", "YYY", "NNNN", "YYY", "BBB"]|[1, 5]|

### 📒 입출력 예 설명
**입출력 예 #1**  
문제 예시와 같습니다.

**입출력 예 #2**  
3종류의 보석(AA, AB, AC)을 모두 포함하는 가장 짧은 구간은 [1, 3], [2, 4]가 있습니다.
시작 진열대 번호가 더 작은 [1, 3]을 return 해주어야 합니다.

**입출력 예 #3**  
1종류의 보석(XYZ)을 포함하는 가장 짧은 구간은 [1, 1], [2, 2], [3, 3]이 있습니다.
시작 진열대 번호가 가장 작은 [1, 1]을 return 해주어야 합니다.

**입출력 예 #4**  
4종류의 보석(ZZZ, YYY, NNNN, BBB)을 모두 포함하는 구간은 [1, 5]가 유일합니다.
그러므로 [1, 5]를 return 해주어야 합니다.

※ 공지 - 2020년 7월 21일 테스트케이스가 추가되었습니다.

### 📔 나의 알고리즘 순서
1. 보석의 종류가 몇개인지 구한다.
2. 보석 진열대를 순차적으로 하나씩 접근을 시도한다.
3. 현재 진열대에서 판매하는 보석을 기록하고, 모든 보석의 종류를 구매할 수 있는지 확인한다.  
  3-1. 모든 보석을 구매할 수 없는 경우, 2번부터 다시
  3-2. 모든 보석을 구매할 수 있는 경우, 현재 기록하고 있는 길이보다 짧은 동선으로 구매 가능한가 확인한다.
    3-2-1. 현재 기록보다 동선이 긴 경우, 2번 부터 다시
    3-2-2. 현재 기록보다 동선이 짧은 경우, 현재 기록을 짧은 동선으로 변경해준다.
4. 보석 진열대의 전부 구경했다면, 모든 보석을 구매할 수 있는 최단 경로를 반환한다.

### ✅ 나의 해답코드
```javascript
function solution(gems) {
  const gemSet = new Set(gems);
  const gemMap = new Map();

  let result = [1, gems.length];
  gems.forEach((gem, idx) => {
    gemMap.delete(gem);
    gemMap.set(gem, idx);
    if (gemMap.size === gemSet.size) {
      const candidate = [gemMap.values().next().value + 1, idx + 1];
      result = result[1] - result[0] > candidate[1] - candidate[0] ? candidate : result;
    }
  });
  return result;
}
```

### 🤔고민한점 & 💡배운점
1\) 🤔 처음에는 진열대에 방문할 때마다 새롭게 기록을 시작하여, 모든 보석이 구매 가능할 때마다 기록중인 배열에서 제거하여, 구매 가능한 경로 배열에 넣어주는 방식으로 모든 구매 가능한 경로를 구해서 최단 거리를 추출하는 방식을 사용하려고 했다.

```js
function solution(gems) {
  const gemSet = new Set(gems);

  let cases = [];
  let eyeShopping = [];
  gems.forEach((gem, idx) => {
    // 새로운 진열대 구경시 하나의 case를 집어넣는다
    const initList = {set: new Set(), startIdx: idx + 1, count: 0};
    eyeShopping.push(initList);
    
    // 기록중 모든 보석을 구매할 수 있는 경우가 나오는지 확인한다.
    let out = 0;
    eyeShopping.forEach(list => {
      list.set.add(gem);
      list.count++;
      if(list.set.size === gemSet.size) out++;
    });
    
    // 모든 보석 구매가 가능한 경로가 있으면 별도로 구매 가능 케이스로 옮긴다.
    if(out > 0) {
      const splicedList = eyeShopping
        .splice(0, out)
        .map(list => [list.startIdx, list.startIdx + list.count - 1]);
      cases = [...cases, ...splicedList];
    }
  });
  
  // 최단 경로를 구한다.
  const lenList = cases.map(([start, end]) => end - start);
  const min = Math.min(...lenList);
  
  // 최단 경로에 해당하는 경우의 수중 시작 진열대 번호가 가장 작은 구간을 반환한다.
  const target = cases.filter(([start, end]) => min === end - start);
  return target[0];
}
```

이런 방식으로 진행하면 보석 진열대를 한 번만 쓱 지나가면서, 구매 가능한 모든 경로를 판별할 수 있으니 O(N^2)보다 빠르게 해결할 수 있을 것이라 생각했다. 하지만 시간복잡도는 언제나 최악의 경우를 고려해야하고, 구조를 살펴보면 이중 for문을 돌리는 것과 같다. 그래서 이 문제 풀이법은 정확성은 맞아도 효율성을 통과할 수 없는 코드였다.

2\) 🤔 다른 방법을 고민하던 중 진열대 별로 기록을 시작하면, 먼저 누적된 곳은 뒤에 누적된 애들보다 먼저 끝나거나 같이 끝난다는 점을 알게 되었다. 이런 특성을 이용한다면 모든 보석이 구매 가능한 상태가 되었을 때 앞에서부터 순차적으로 구매 가능 경로를 반환하고, 다시 모든 보석을 구매할 수 없는 상태가 되면 보석 진열대를 돌아보는 식으로 반복적으로 진행해보는게 어떨까란 생각이 들었다.

해당 아이디어를 떠올리자. **투포인터 방식으로 보석 진열대를 이동하면서 확인해보는게 어떨까란 생각을 하게 되었다.**

```js
function solution(gems) {
  // 모든 보석의 종류를 구한다.
  const gemSet = new Set(gems);

  // 투 포인터로 좌표를 초기화하고, 진열대를 지날 때마다 어떤 보석을 구매할 수 있는지 기록한다.
  let [start, end] = [0, 0];
  const gemMap = new Map([...gemSet].map((key) => [key, 0]));

  const cases = [];
  gems.forEach((gem, idx) => {
    gemMap.set(gem, gemMap.get(gem) + 1);
    end = idx;

    // 모든 보석을 구매할 수 있는 상태가 있는지 확인한다.
    while (true) {
      const hasAllGem = [...gemMap.values()].every((value) => value > 0);
      if (!hasAllGem) break;

      // 모든 보석을 구매할 수 있다면, 구매 가능 경로로서 추가하고, start 포인터를 앞으로 한 칸 땡겨준다.
      cases.push([start + 1, end + 1]);
      const tGem = gems[start];
      gemMap.set(tGem, gemMap.get(tGem) - 1);
      start++;
    }
  });

  // 최소 경로의 길이를 구한다.
  const lenList = cases.map(([start, end]) => end - start);
  const min = Math.min(...lenList);

  // 최소 경로에 해당하는 최단 거리를 반환한다.
  const target = cases.filter(([start, end]) => min === end - start);
  return target[0];
}
```

속도가 확실히 개선이 되었지만, 효율성을 통과하지 못했다.

3\) 🤔 생각해보니 최소 경로를 구하고, 다시 최단거리를 반환할 수 있는 구매 경로를 확인하는게 불필요하다는 것을 알게 되었다. 애초에 구매 가능한 경로가 나왔을 때, 그 경로가 최단 경로인지 확인하면 되기 때문이다. 또한 최단 거리의 길이가 같다면 보통 시작 진열대 번호가 앞인 경우를 우선하라고 했는데, 투 포인터는 앞에서부터 순차적으로 접근함으로 자동으로 이 조건을 충족한다. 다음은 가능한 경로가 나오자마자 비교해보는 방법을 사용한 코드이다.

```js
function solution(gems) {
  // 모든 보석의 종류를 구한다.
  const gemSet = new Set(gems);

  // 투 포인터로 좌표를 초기화하고, 진열대를 지날 때마다 어떤 보석을 구매할 수 있는지 기록한다.
  let [start, end] = [0, 0];
  const gemMap = new Map([...gemSet].map((key) => [key, 0]));

  // 초기 최단 경로를 설정한다.
  let result = [1, Infinity];
  let resultLen = result[1] - result[0];
  gems.forEach((gem, idx) => {
    gemMap.set(gem, gemMap.get(gem) + 1);
    end = idx;
    // 모든 보석을 구매할 수 있는 상태가 있는지 확인한다.
    while (true) {
      const hasAllGem = [...gemMap.values()].every((value) => value > 0);
      if (!hasAllGem) break;

      // 모든 보석을 구매할 수 있다면, 현재 경로가 기존의 경로보다 짧은지 비교하고, 짧으면 교체한다.
      const listLen = end - start;
      if (resultLen > listLen) {
        result = [start + 1, end + 1];
        resultLen = listLen;
      }

      const tGem = gems[start];
      gemMap.set(tGem, gemMap.get(tGem) - 1);
      start++;
    }
  });
  return result;
}
```

수정을 하고 나니 효율성 테스트가 통과하기 시작했다. 8/15 확률도 효율성 테스트를 통과했다. 문제는 더이상 고민해도 어떤 방식으로 개산할 수 있는지 도무지 알 수가 없었다.  map.values()를 배열로 추출하여 every 메서드로 매번 확인하는게 무거운가? 이런 정도의 생각 밖에 나지 않았다. 이때가 풀이를 시작한지 1시간이 조금 넘었다. 

이후 더이상 진척이 없어 다른 사람의 풀이를 확인하였다.

1\) 💡다른 사람들의 풀이를 확인하던 중 보석의 좌표를 항상 새롭게 갱신한다는 점을 알게 되었다. 매번 새롭게 보석의 위치를 갱신하면 다음과 확인할 수 있다.

① 순차적으로 확인하며 보석의 위치를 기록한다.
> ~~AA BB~~ BB AA AA CC DD AA  
> AA: 1, BB: 2 (보석: 위치)

② 중복이 발생할 때 index를 덮어 씌운다.
> ~~AA BB BB~~ AA AA CC DD AA  
> AA: 1, BB: 3

③ 조건에 만족되면 알맞은 형태로 정답후보로 변경 -> 정답과 비교

> ~~AA BB BB AA AA CC DD~~ AA  
> AA: 5, BB: 3, CC: 6, DD: 7 -> [3, 7]

> ~~AA BB BB AA AA CC DD AA~~
> AA: 8, BB: 3, CC: 6, DD: 7 -> [3, 8]

위와 같이 모든 보석이 기록되는 순간부터 가능한 최단 경로가 갱신되면서 비교할 수 있게 된다.

또한 참고를 하던중 Map은 삽입 순서를 유지해주기 때문에 map.values().next() 를 통해 반환하는 값들은 제일 먼저 넣은 값들이 나온다. 때문에 start 포인터를 대신해줄 수 있게 된다. 이러한 특성들을 정리한게 위의 해답 코드이다.

### 🔍참고 내용
1. [보석 쇼핑 문제 풀이 해설](https://velog.io/@bepyan/JS-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%B3%B4%EC%84%9D-%EC%87%BC%ED%95%91)
2. [Map은 객체의 순서를 보장하는가](https://myung-ho.tistory.com/90)