## ✨스택/큐
[Level2 **기능개발** 문제](https://programmers.co.kr/learn/courses/30/lessons/42586) 

### 📘 문제 설명
프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

### 📕 제한사항
- 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
- 작업 진도는 100 미만의 자연수입니다.
- 작업 속도는 100 이하의 자연수입니다.
- 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

### 📙 입출력 예
|progresses|speeds|return|
|:---------|:-------|:-----|
| [93, 30, 55] | [1, 30, 5] | [2, 1] |
| [95, 90, 99, 99, 80, 99] | [1, 1, 1, 1, 1, 1] | [1, 3, 2] |

### 📒 입출력 예 설명
입출력 예 #1   
첫 번째 기능은 93% 완료되어 있고 하루에 1%씩 작업이 가능하므로 7일간 작업 후 배포가 가능합니다.
두 번째 기능은 30%가 완료되어 있고 하루에 30%씩 작업이 가능하므로 3일간 작업 후 배포가 가능합니다. 하지만 이전 첫 번째 기능이 아직 완성된 상태가 아니기 때문에 첫 번째 기능이 배포되는 7일째 배포됩니다.
세 번째 기능은 55%가 완료되어 있고 하루에 5%씩 작업이 가능하므로 9일간 작업 후 배포가 가능합니다.

따라서 7일째에 2개의 기능, 9일째에 1개의 기능이 배포됩니다.

입출력 예 #2   
모든 기능이 하루에 1%씩 작업이 가능하므로, 작업이 끝나기까지 남은 일수는 각각 5일, 10일, 1일, 1일, 20일, 1일입니다. 어떤 기능이 먼저 완성되었더라도 앞에 있는 모든 기능이 완성되지 않으면 배포가 불가능합니다.

따라서 5일째에 1개의 기능, 10일째에 3개의 기능, 20일째에 2개의 기능이 배포됩니다.

### 📗 개인적인 문제 해설
> 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포

위의 내용을 통해 알 수 있는 것은 **앞에 있는 기능이 완성되어야지만 뒤에 완성된 작업이 반영 된다는 점**인데, 이는 **먼저 들어간 작업이 먼저 나와야하는 Queue 자료구조와 같은 성질**을 가진다. 

> 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지

작업의 순서와 작업별 개발 속도를 알 수 있다. 나는 여기서 작업과 개발속도를 묶어서 하나의 job 또는 task로 관리하고자 했다.

> 제한사항) 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

이것을 보고 작업별(job)로 하루의 작업속도(speed)를 진척도(progress)에 반영하고, 그 이후에 작업이 완성되었는지, 선행하는 작업도 같이 완료되었는지를 판단해주기로 했다. 

### 📔 알고리즘 순서
1\) progress와 speed를 묶어서 하나의 작업(job)으로 만들기
```python
jobs = [{"progress": progress, "speed":speed} for progress, speed in zip(progresses, speeds)]
```
2\) 작업별(job)로 진척도(progress)에 개발속도(speed) 반영하기
```python
# 하루 작업량 반영
for job in jobs:
    job["progress"] += job["speed"]
```
3\) 선행되어야 하는 기능부터 완성되었는지 확인
```python
# 작업 완성 확인
count = 0
for job in jobs:
    if job["progress"] < 100:
        break
    count += 1
    
# 완성된 작업 삭제        
for _ in range(count):
    jobs.pop(0)
```
4\) 하루 배포량 저장하기
```python
# 하루 작업량 반영
if count > 0:
    answer.append(count)
```
5\) 모든 기능이 완료될 때까지 2~4번 반복

### ✅ 해답코드
```python
# python 코드
def solution(progresses, speeds):
    answer = []
    
    # queue에 작업 주입
    jobs = [{"progress": progress, "speed":speed} for progress, speed in zip(progresses, speeds)]
    
    # 작업시작
    while jobs:
        # 하루 작업량 반영
        for job in jobs:
            job["progress"] += job["speed"]
            
        # 작업 완성 확인
        count = 0
        for job in jobs:
            if job["progress"] < 100:
                break
            count += 1
            
        for _ in range(count):
            jobs.pop(0)
            
        # 하루 작업량 반영
        if count > 0:
            answer.append(count)
        
    return answer
```

```javascript
// JS 코드
function solution(progresses, speeds) {
    let answer = [];

    while(progresses.length > 0) {
        let count = 0;
        
        // 1. 하루 작업량 반영
        for(let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];    
        }
        
        // 2. 작업 완성 확인
        for(let i = 0; i < progresses.length; i++) {
            if(progresses[i] < 100) break;
            count += 1;
        }
        
        // 3. 완성된 작업 삭제 
        if(count > 0) {
            answer.push(count);
            for(let i = 0; i < count; i++) {
                progresses.shift();
                speeds.shift();
            }
        }
    }
    
    return answer;
}
```
