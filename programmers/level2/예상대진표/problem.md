### 🔍 문제 링크
[Level2 **예상 대진표** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/12985)

### 📘 문제 설명
△△ 게임대회가 개최되었습니다. 이 대회는 N명이 참가하고, 토너먼트 형식으로 진행됩니다. N명의 참가자는 각각 1부터 N번을 차례대로 배정받습니다. 그리고, 1번↔2번, 3번↔4번, ... , N-1번↔N번의 참가자끼리 게임을 진행합니다. 각 게임에서 이긴 사람은 다음 라운드에 진출할 수 있습니다. 이때, 다음 라운드에 진출할 참가자의 번호는 다시 1번부터 N/2번을 차례대로 배정받습니다. 만약 1번↔2번 끼리 겨루는 게임에서 2번이 승리했다면 다음 라운드에서 1번을 부여받고, 3번↔4번에서 겨루는 게임에서 3번이 승리했다면 다음 라운드에서 2번을 부여받게 됩니다. 게임은 최종 한 명이 남을 때까지 진행됩니다.

이때, 처음 라운드에서 A번을 가진 참가자는 경쟁자로 생각하는 B번 참가자와 몇 번째 라운드에서 만나는지 궁금해졌습니다. 게임 참가자 수 N, 참가자 번호 A, 경쟁자 번호 B가 함수 solution의 매개변수로 주어질 때, 처음 라운드에서 A번을 가진 참가자는 경쟁자로 생각하는 B번 참가자와 몇 번째 라운드에서 만나는지 return 하는 solution 함수를 완성해 주세요. **단, A번 참가자와 B번 참가자는 서로 붙게 되기 전까지 항상 이긴다고 가정합니다.
**

### 📕 제한사항
- N : 21 이상 220 이하인 자연수 (2의 지수 승으로 주어지므로 부전승은 발생하지 않습니다.)
- A, B : N 이하인 자연수 (단, A ≠ B 입니다.)

### 📙 입출력 예
|N|A|B|answer|
|:---|:---|:---|
|8|4|7|3|

### 📒 입출력 예 설명
**입출력 예 #1**
첫 번째 라운드에서 4번 참가자는 3번 참가자와 붙게 되고, 7번 참가자는 8번 참가자와 붙게 됩니다. 항상 이긴다고 가정했으므로 4번 참가자는 다음 라운드에서 2번이 되고, 7번 참가자는 4번이 됩니다. 두 번째 라운드에서 2번은 1번과 붙게 되고, 4번은 3번과 붙게 됩니다. 항상 이긴다고 가정했으므로 2번은 다음 라운드에서 1번이 되고, 4번은 2번이 됩니다. 세 번째 라운드에서 1번과 2번으로 두 참가자가 붙게 되므로 3을 return 하면 됩니다.

### 📔 나의 알고리즘 순서
1. 현재 라운드에서 A와 B가 만났는지 확인한다.  
  1-1. 만났다면, 현재 라운드를 반환하고 종료한다.  
  1-2. 못만났다면, 다음 순서를 진행한다.
2. 다음 라운드의 대진 번호를 받는다.
3. 두 대상이 만날 때까지 1-2번을 반복한다.

### ✅ 나의 해답코드
```javascript
function solution(n,a,b) {
    let round = 0;
    while(a !== b) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        round++;
    }
    return round;
}
```

### 📝고민한점 & 💡배운점
**1\) 🤔문제 자체는 어렵지 않은데, 문제 설명이 오히려 문제를 어렵게 만드는게 아닐까 생각했다.**

> 만약 1번↔2번 끼리 겨루는 게임에서 2번이 승리했다면 다음 라운드에서 1번을 부여받고, 3번↔4번에서 겨루는 > 게임에서 3번이 승리했다면 다음 라운드에서 2번을 부여받게 됩니다. 

설명의 일부분으로 몇번이 승리하면 몇번을 부여 받는다라는 식의 설명은 문제를 어렵게 만드는 요소라고 생각한다. 1번↔2번 경기에서 이긴 사람은 1번을, 3번↔4번 경기에서 이긴 사람은 2번을 순차적으로 배정받는다라고 설명하는게 더 좋지 않았을까...