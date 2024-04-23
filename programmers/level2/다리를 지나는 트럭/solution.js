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
