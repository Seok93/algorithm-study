### 🔍 문제 링크
[Level2 **다리를 지나는 트럭** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/42583)

### 📘 문제 설명
트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.

예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

|경과 시간|다리를 지난 트럭|다리를 건너는 트럭|대기 트럭|
|:---|:---|:---|:---|
|0|[]|[]|[7,4,5,6]|
|1~2|[]|[7]|[4,5,6]|
|3|[7]|[4]|[5,6]|
|4|[7]|[4,5]|[6]|
|5|[7,4]|[5]|[6]|
|6~7|[7,4,5]|[6]|[]|
|8|[7,4,5,6]|[]|[]|

따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

### 📕 제한사항
- bridge_length는 1 이상 10,000 이하입니다.
- weight는 1 이상 10,000 이하입니다.
- truck_weights의 길이는 1 이상 10,000 이하입니다.
- 모든 트럭의 무게는 1 이상 weight 이하입니다.

### 📙 입출력 예
|bridge_length|weight|truck_weights|return|
|:---|:---|:---|:---|
|2|10|[7,4,5,6]|8|
|100|100|[10]|101|
|100|100|[10,10,10,10,10,10,10,10,10,10]|110|

### 📔 나의 알고리즘 순서
1. 모든 트럭이 다리를 지났는가 확인한다.
2. 다리 위의 트럭들을 모두 한 칸씩 움직이고, 다리를 지난 트럭은 제거한다.
3. 대기중인 트럭이 있다면, 다리에 올릴 수 있는지 확인하고 올려준다.


### ✅ 나의 해답코드
```javascript
function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let onBridgeWeight = 0;
  const onBridgeTruck = [];

  // 모든 트럭이 다리를 지났는가 확인
  while (onBridgeTruck.length > 0 || truck_weights.length > 0) {
    // 매 초 다리 위의 트럭을 한 칸씩 이동
    onBridgeTruck.forEach((truck) => (truck[1] += 1));
    time += 1;

    // 다리를 지난 트럭을 제거
    if (onBridgeTruck.length > 0 && onBridgeTruck[0][1] > bridge_length) {
      const [truck, time] = onBridgeTruck.shift();
      onBridgeWeight -= truck;
    }

    // 대기 중인 트럭이 있고, 다리에 올릴 수 있는지 확인
    if (truck_weights.length > 0 && weight >= onBridgeWeight + truck_weights[0]) {
      const truck = truck_weights.shift();
      onBridgeWeight += truck;
      onBridgeTruck.push([truck, 1]);
    }
  }
  return time;
}
```

### ✨ 깔끔한 해답코드
```javascript
function solution(bridge_length, weight, truck_weights) {
  // '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 얘가 나갈 시간].
  let time = 0, qu = [[0, 0]], weightOnBridge = 0;

  // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
  while (qu.length > 0 || truck_weights.length > 0) {
    // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
    //    다리 위 트럭 무게 합에서 빼준다.
    if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

    if (weightOnBridge + truck_weights[0] <= weight) {
      // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면 
      //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
      weightOnBridge += truck_weights[0];
      qu.push([truck_weights.shift(), time + bridge_length]);
    } else {
      // 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
      //    첫번째 트럭이 빠지도록 그 시간으로 점프한다.
      //    참고: if 밖에서 1 더하기 때문에 -1 해줌
      if (qu[0]) time = qu[0][1] - 1;
    }
    // 시간 업데이트 해준다.
    time++;
  }
  return time;
}
```

다리에 못올라가는 상황에서, 대기하는 시간만큼 시간을 점프하는 부분이 추가되어 있다.

### 🤔고민한점 & 💡배운점
1\) 🤔 이번 문제는 특별히 어려운 점은 없었지만, 트럭이 다리를 건너는 시점이 언제인지 조금 헷갈렸다. 문제를 풀기 전에 트럭이 정확하게 언제 지나간 것인지 정리를 하지 않았다면 헷갈려서 코드를 많이 수정했을 것 같다.