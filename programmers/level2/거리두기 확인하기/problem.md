### 🔍 문제 링크
[Level2 **거리두기 확인하기** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/81302)

### 📘 문제 설명
개발자를 희망하는 죠르디가 카카오에 면접을 보러 왔습니다.

코로나 바이러스 감염 예방을 위해 응시자들은 거리를 둬서 대기를 해야하는데 개발 직군 면접인 만큼
아래와 같은 규칙으로 대기실에 거리를 두고 앉도록 안내하고 있습니다.

> 1. 대기실은 5개이며, 각 대기실은 5x5 크기입니다.
> 2. 거리두기를 위하여 응시자들 끼리는 맨해튼 거리1가 2 이하로 앉지 말아 주세요.
> 3. 단 응시자가 앉아있는 자리 사이가 파티션으로 막혀 있을 경우에는 허용합니다.
> 
예를 들어,

5개의 대기실을 본 죠르디는 각 대기실에서 응시자들이 거리두기를 잘 기키고 있는지 알고 싶어졌습니다. 자리에 앉아있는 응시자들의 정보와 대기실 구조를 대기실별로 담은 2차원 문자열 배열 `places`가 매개변수로 주어집니다. 각 대기실별로 거리두기를 지키고 있으면 1을, 한 명이라도 지키지 않고 있으면 0을 배열에 담아 return 하도록 solution 함수를 완성해 주세요.

### 📕 제한사항
- `places`의 행 길이(대기실 개수) = 5
  - `places`의 각 행은 하나의 대기실 구조를 나타냅니다.
- `places`의 열 길이(대기실 세로 길이) = 5
- `places`의 원소는 `P`, `O`, `X`로 이루어진 문자열입니다.
  - `place`s 원소의 길이(대기실 가로 길이) = 5
  - `P`는 응시자가 앉아있는 자리를 의미합니다.
  - `O`는 빈 테이블을 의미합니다.
  - `X`는 파티션을 의미합니다.
- 입력으로 주어지는 5개 대기실의 크기는 모두 5x5 입니다.
- return 값 형식
  - 1차원 정수 배열에 5개의 원소를 담아서 return 합니다.
  - `places`에 담겨 있는 5개 대기실의 순서대로, 거리두기 준수 여부를 차례대로 배열에 담습니다.
  - 각 대기실 별로 모든 응시자가 거리두기를 지키고 있으면 1을, 한 명이라도 지키지 않고 있으면 0을 담습니다.

### 📙 입출력 예
|places|result|
|:---|:---|
|[["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]|[1, 0, 1, 1, 1]|

### 📒 입출력 예 설명
**입출력 예 #1**  

**첫 번째 대기실**

|No.|0|1|2|3|4|
|:---|:---|:---|:---|:---|:---|
|0|P|O|O|O|P|
|1|O|X|X|O|X|
|2|O|P|X|P|X|
|3|O|O|X|O|X|
|4|P|O|X|X|P|

- 모든 응시자가 거리두기를 지키고 있습니다.


**두 번째 대기실**
|No.|0|1|2|3|4|
|:---|:---|:---|:---|:---|:---|
|0|P|O|O|P|X|
|1|O|X|P|X|P|
|2|P|X|X|X|O|
|3|O|X|X|X|O|
|4|O|O|O|P|P|

- (0, 0) 자리의 응시자와 (2, 0) 자리의 응시자가 거리두기를 지키고 있지 않습니다.
- (1, 2) 자리의 응시자와 (0, 3) 자리의 응시자가 거리두기를 지키고 있지 않습니다.
- (4, 3) 자리의 응시자와 (4, 4) 자리의 응시자가 거리두기를 지키고 있지 않습니다.

**세 번째 대기실**
|No.|0|1|2|3|4|
|:---|:---|:---|:---|:---|:---|
|0|P|X|O|P|X|
|1|O|X|O|X|P|
|2|O|X|P|O|X|
|3|O|X|X|O|P|
|4|P|X|P|O|X|

- 모든 응시자가 거리두기를 지키고 있습니다.

**네 번째 대기실**
|No.|0|1|2|3|4|
|:---|:---|:---|:---|:---|:---|
|0|O|O|O|X|X|
|1|X|O|O|O|X|
|2|O|O|O|X|X|
|3|O|X|O|O|X|
|4|O|O|O|O|O|

- 대기실에 응시자가 없으므로 거리두기를 지키고 있습니다.

**다섯 번째 대기실**
|No.|0|1|2|3|4|
|:---|:---|:---|:---|:---|:---|
|0|P|X|P|X|P|
|1|X|P|X|P|X|
|2|P|X|P|X|P|
|3|X|P|X|P|X|
|4|P|X|P|X|P|

- 모든 응시자가 거리두기를 지키고 있습니다.

두 번째 대기실을 제외한 모든 대기실에서 거리두기가 지켜지고 있으므로, 배열 [1, 0, 1, 1, 1]을 return 합니다.

### 📔 나의 알고리즘 순서
1) 살펴볼 장소를 정한다.
2) 해당 장소의 사람들이 멘허튼 거리를 유지하고 있는지 확인한다.  
  2-1) 맨허튼 거리 2 이하면, 대상과 상대방의 거리가 확보되지 않았음으로 해당 장소는 아웃. 1번부터 다시 시작.  
  2-2) 맨허튼 거리가 3 이상이라면, 문제가 없으므로 다른 사람의 맨허튼 거리를 확인한다.  

### ✅ 나의 해답코드
```javascript
function solution(places) {
  const DIRECTION = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const isValidPosition = (place, pos, dist, visited) => {
    let queue = [pos];
    while (dist < 2 && queue.length > 0) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const [tr, tc] = queue.pop();
        for (let j = 0; j < DIRECTION.length; j++) {
          const [dr, dc] = DIRECTION[j];
          const [nr, nc] = [tr + dr, tc + dc];

          if (
            nr < 0 || nr > 4 || nc < 0 || nc > 4
            || visited[nr][nc] === 1
            || place[nr][nc] === 'X'
          )
            continue;

          if (place[nr][nc] === 'P') return false;
          visited[nr][nc] = 1;
          queue.unshift([nr, nc]);
        }
      }
      dist += 1;
    }
    return true;
  };

  return places.map((place, index) => {
    for (let row = 0; row < place.length; row++) {
      for (let col = 0; col < place[row].length; col++) {
        const target = place[row][col];

        if (target !== 'P') continue;

        const pos = [row, col];
        const visited = place.map((line) => line.split('').map(() => 0));
        visited[row][col] = 1;

        const result = isValidPosition(place, pos, 0, visited);
        if (result === false) return 0;
      }
    }
    return 1;
  });
}

```

### 📝고민한점 & 💡배운점
1\) 🤔 멘허튼 거리를 구하는 부분을 제일 고민했다. 각 사람별로 멘허튼 거리를 확보하는지 확인하기 위해서 사람의 좌표를 기준으로 상하좌우 4방향을 향해 순차적으로 나아가는 BFS 방식을 사용했다. 추가적으로 중간에 멘허튼 거리를 충족하지 못하는 사람이 있다면, 다른 사람들을 더이상 고려하지 않아도 되기 때문에 조기 종료하도록 설계했다.
