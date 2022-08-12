function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let onBridgeWeight = 0;
  const onBridgeTruck = [];

  while (onBridgeTruck.length > 0 || truck_weights.length > 0) {
    // 1. 다리 위의 트럭을 모두 한 칸씩 움직인다.
    onBridgeTruck.forEach((truck) => {
      truck.length += 1;
    });

    // 2. 맨 앞의 트럭이 다리를 모두 지났는지 확인
    if (onBridgeTruck.length > 0 && onBridgeTruck[0].length > bridge_length) {
      onBridgeWeight -= onBridgeTruck.shift().weight;
    }

    // 3. 다리에 대기중인 트럭 올리기
    if (truck_weights.length > 0 && weight >= onBridgeWeight + truck_weights[0]) {
      const tructWeight = truck_weights.shift();

      onBridgeWeight += tructWeight;
      onBridgeTruck.push({ length: 1, weight: tructWeight });
    }
    time++;
  }

  return time;
}
