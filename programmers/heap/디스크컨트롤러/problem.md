## ✨ 해시
[Level3 **디스크 컨트롤러** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/42627) 

### 📘 문제 설명
하드디스크는 한 번에 하나의 작업만 수행할 수 있습니다. 디스크 컨트롤러를 구현하는 방법은 여러 가지가 있습니다. 가장 일반적인 방법은 요청이 들어온 순서대로 처리하는 것입니다.

예를들어
```
- 0ms 시점에 3ms가 소요되는 A작업 요청
- 1ms 시점에 9ms가 소요되는 B작업 요청
- 2ms 시점에 6ms가 소요되는 C작업 요청
```

와 같은 요청이 들어왔습니다. 이를 그림으로 표현하면 아래와 같습니다.
![디스크사진1](./img/img1.png)

한 번에 하나의 요청만을 수행할 수 있기 때문에 각각의 작업을 요청받은 순서대로 처리하면 다음과 같이 처리 됩니다.

![디스크사진1](./img/img2.png)

```
- A: 3ms 시점에 작업 완료 (요청에서 종료까지 : 3ms)
- B: 1ms부터 대기하다가, 3ms 시점에 작업을 시작해서 12ms 시점에 작업 완료(요청에서 종료까지 : 11ms)
- C: 2ms부터 대기하다가, 12ms 시점에 작업을 시작해서 18ms 시점에 작업 완료(요청에서 종료까지 : 16ms)
```
이 때 각 작업의 요청부터 종료까지 걸린 시간의 평균은 10ms(= (3 + 11 + 16) / 3)가 됩니다.

하지만 A → C → B 순서대로 처리하면
![디스크사진1](./img/img3.png)
```
- A: 3ms 시점에 작업 완료(요청에서 종료까지 : 3ms)
- C: 2ms부터 대기하다가, 3ms 시점에 작업을 시작해서 9ms 시점에 작업 완료(요청에서 종료까지 : 7ms)
- B: 1ms부터 대기하다가, 9ms 시점에 작업을 시작해서 18ms 시점에 작업 완료(요청에서 종료까지 : 17ms)
```
이렇게 A → C → B의 순서로 처리하면 각 작업의 요청부터 종료까지 걸린 시간의 평균은 9ms(= (3 + 7 + 17) / 3)가 됩니다.

각 작업에 대해 [작업이 요청되는 시점, 작업의 소요시간]을 담은 2차원 배열 jobs가 매개변수로 주어질 때, 작업의 요청부터 종료까지 걸린 시간의 평균을 가장 줄이는 방법으로 처리하면 평균이 얼마가 되는지 return 하도록 solution 함수를 작성해주세요. (단, 소수점 이하의 수는 버립니다)

### 📕 제한사항
- jobs의 길이는 1 이상 500 이하입니다.
- jobs의 각 행은 하나의 작업에 대한 [작업이 요청되는 시점, 작업의 소요시간] 입니다.
- 각 작업에 대해 작업이 요청되는 시간은 0 이상 1,000 이하입니다.
- 각 작업에 대해 작업의 소요시간은 1 이상 1,000 이하입니다.
- 하드디스크가 작업을 수행하고 있지 않을 때에는 먼저 요청이 들어온 작업부터 처리합니다.

### 📙 입출력 예
|jobs|return|
|[[0, 3], [1, 9], [2, 6]]|9|

### 📒 입출력 예 설명
문제에 주어진 예와 같습니다.

- 0ms 시점에 3ms 걸리는 작업 요청이 들어옵니다.
- 1ms 시점에 9ms 걸리는 작업 요청이 들어옵니다.
- 2ms 시점에 6ms 걸리는 작업 요청이 들어옵니다.

### 📗 개인적인 문제 해설
> 작업의 요청부터 종료까지 걸린 시간의 평균을 가장 줄이는 방법으로 처리하면 평균이 얼마가 되는지 return 하도록 solution 함수를 작성해주세요.

스케줄링에서 SJF(shortest job first) 기법에 해당하는 내용이라고 생각했다. SJF는 항상 작업 시간이 제일 조금 걸리는 것을 우선하여 대기시간을 제일 짧게 만드는 방법을 말한다. SJF는 긴 작업 시간을 가진 작업의 무한 대기 등의 문제점이 있지만, 이번 문제에서는 그런 점을 고려하지 않고 최소한의 평균 처리시간을 원하니 sjf와 같은 순서로 일을 처리해야 한다고 생각했다.

### 📔 알고리즘 순서
1\) 현재 시간에 작업할 내용이 있는지 확인   
2\) 작업할 내용이 있다면, 작업할 내역중 제일 처리시간이 짧은 것을 우선적으로 처리하기   
3\) 모든 작업이 끝날 때까지 반복...   


### ✅ 해답코드
```javascript
function solution(jobs) {
    const heap = [];        // 요청된 작업풀
    
    let curTime = 0;        // 현재 시간
    let prevTime = -1;      // 이전 작업 시간
    let finishedCnt = 0;    // 끝난 작업의 수
    let totalWorkTime = 0;  // 작업에 걸린 시간
    
    while(jobs.length > finishedCnt) {
        // 현재 시간에 요청된 작업이 있는가?
        jobs.forEach(([requestTime, workTime]) => {
            if(requestTime > prevTime && requestTime <= curTime)  {
                heap.push({requestTime, workTime});
            }
        });
        
        // 요청된 작업이 있다면, 최소 작업량을 가진 작업 먼저 실행
        if(heap.length > 0 ) {
            heap.sort((a, b) => a.workTime - b.workTime);
            
            const target = heap.shift();
            const waitTime = curTime - target.requestTime;
            const workTime = target.workTime;
            
            prevTime = curTime;
            curTime += workTime;
            totalWorkTime += waitTime + workTime;
            finishedCnt++;   
        } else {
            curTime += 1;
        }
    }
    
    return Math.floor(totalWorkTime / jobs.length);
}
```