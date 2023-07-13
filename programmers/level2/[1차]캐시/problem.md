### 🔍 문제 링크
[Level2 **\[1차\] 캐시** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/17680)

### 📘 문제 설명
지도개발팀에서 근무하는 제이지는 지도에서 도시 이름을 검색하면 해당 도시와 관련된 맛집 게시물들을 데이터베이스에서 읽어 보여주는 서비스를 개발하고 있다.
이 프로그램의 테스팅 업무를 담당하고 있는 어피치는 서비스를 오픈하기 전 각 로직에 대한 성능 측정을 수행하였는데, 제이지가 작성한 부분 중 데이터베이스에서 게시물을 가져오는 부분의 실행시간이 너무 오래 걸린다는 것을 알게 되었다.
어피치는 제이지에게 해당 로직을 개선하라고 닦달하기 시작하였고, 제이지는 DB 캐시를 적용하여 성능 개선을 시도하고 있지만 캐시 크기를 얼마로 해야 효율적인지 몰라 난감한 상황이다.

어피치에게 시달리는 제이지를 도와, DB 캐시를 적용할 때 캐시 크기에 따른 실행시간 측정 프로그램을 작성하시오.

### 📕 제한사항
**입력 형식**
- 캐시 크기(cacheSize)와 도시이름 배열(cities)을 입력받는다.
- cacheSize는 정수이며, 범위는 0 ≦ cacheSize ≦ 30 이다.
- cities는 도시 이름으로 이뤄진 문자열 배열로, 최대 도시 수는 100,000개이다.
- 각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성되며, 대소문자 구분을 하지 않는다. 도시 이름은 최대 20자로 이루어져 있다.

**출력 형식**
- 입력된 도시이름 배열을 순서대로 처리할 때, "총 실행시간"을 출력한다.

**조건**
- 캐시 교체 알고리즘은 LRU(Least Recently Used)를 사용한다.
- cache hit일 경우 실행시간은 1이다.
- cache miss일 경우 실행시간은 5이다.

### 📙 입출력 예
|캐시크기(cacheSize)|도시이름(cities)|실행시간|
|:---|:---|:---|
|3|["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]|50|
|3|["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]|21|
|2|["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]|60|
|5|["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]|52|
|2|["Jeju", "Pangyo", "NewYork", "newyork"]|16|
|0|["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]|25|

### 📔 나의 알고리즘 순서
1. 

### ✅ 나의 해답코드
```javascript
function solution(cacheSize, cities) {
    let time = 0;
    const cache = [];
    
    cities.forEach(city => {
        city = city.toLowerCase();
        if(cache.includes(city)) {
            time += 1;
            cache.splice(cache.indexOf(city), 1);
            cache.unshift(city);
        } else {
            time += 5;
            cache.unshift(city);
            if(cache.length > cacheSize) cache.pop();
        }
    });
    
    return time;
}
```

### ✨ 깔끔한 해답코드
```javascript
function solution(cacheSize, cities) {
    const MISS = 5, HIT = 1;
    let answer = 0, cache = [];

    if (cacheSize === 0) return MISS * cities.length;

    cities.forEach(city => {
        city = city.toUpperCase();

        let idx = cache.indexOf(city);
        if (idx > -1) {
            cache.splice(idx, 1);
            answer += HIT;
        } else {
            if (cache.length >= cacheSize) cache.shift();
            answer += MISS;
        }
        cache.push(city);
    });

    return answer;
}
```
기본 로직은 나의 풀이와 유사하지만, cacheSize를 고려하여 더 빠르게 결과를 반환하도록 조건을 추가한 부분이 사소하지만 중요하다고 생각했다. 

또한 const를 이용하여 `MISS`와 `HIT`를 상수로 관리하여 가독성을 높히고, 코드의 안정성을 높히는 부분도 좋다고 생각했다.

### 📝고민한점 & 💡배운점
1\) 🤔LRU 알고리즘으로 cache를 관리하고 있다. 이때 hit가 되었을 때와 miss가 되었을 때 2가지의 경우를 생각하여 자료구조를 채택해야 했다.

miss가 되었다면 가장 처음에 들어온 데이터가 가장 먼저 삭제가 되어야한다. 이는 FIFO의 특성을 가지고 있다고 할 수 있으므로 queue를 사용하려고 했다. hit가 된다면 queue에서 hit된 데이터를 삭제하고 queue에 새롭게 데이터를 넣어줘 FIFO 특성을 유지할 수 있도록 해주면 LRU 알고리즘을 가지는 자료구조가 된다고 생각했다.