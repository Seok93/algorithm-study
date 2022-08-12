## ✨ 스택/큐
[Level2 **프린터** 문제](https://programmers.co.kr/learn/courses/30/lessons/42587) 

### 📘 문제 설명
일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다. 그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있습니다. 이런 문제를 보완하기 위해 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발했습니다. 이 새롭게 개발한 프린터는 아래와 같은 방식으로 인쇄 작업을 수행합니다.
```
1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
3. 그렇지 않으면 J를 인쇄합니다.
```
예를 들어, 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고 중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다.

내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다. 위의 예에서 C는 1번째로, A는 3번째로 인쇄됩니다.

현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때, 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.

### 📕 제한사항
- 현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다.
- 인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻입니다.
- location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.

### 📙 입출력 예
|priorities|location|return|
|:---------|:-------|:-----|
| [2, 1, 3, 2] |2|1|
| [1, 1, 9, 1, 1, 1] |0|5|

### 📒 입출력 예 설명
예제 #1

문제에 나온 예와 같습니다.

예제 #2

6개의 문서(A, B, C, D, E, F)가 인쇄 대기목록에 있고 중요도가 1 1 9 1 1 1 이므로 C D E F A B 순으로 인쇄합니다.

### 📗 개인적인 문제 해설
1\) `프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다` 부분을 보면 프린터 인쇄 방식이 **FIFO의 특징을 가진 Queue 자료구조의 성질을 가짐을 알 수 있다.**   
2\) `중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발`했다는 말과 더불어 `새로운 인쇄 방식 순서`를 보면 기본적인 **Queue방식을 따르되 우선순위에 따라 출력 순서가 바뀜**을 알 수 있다.   
3\) `내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요`를 보면 프린터의 처음 작업순서를 기억하여 인쇄를 요청한 문서가 출력될 때를 잡아내야한다.


### 📔 알고리즘 순서
1\) 프린터 내의 대기목록의 순서를 기억시킨다.
```python
jobs = [{"order": order, "priority": priority} for order, priority in enumerate(priorities)]
```

2\) 요청한 문서(location)가 출력될 때까지 인쇄 작업 방식을 반복한다. 
```python
count = 0
while jobs:
    target = jobs.pop(0)
    for job in jobs:
        if target["priority"] < job["priority"]:
            jobs.append(target)
            break
    else:
        count += 1
        if target["order"] == location:
            return count
```

### ✅ 해답코드
```python
# python
def solution(priorities, location):
    # 처음 위치 순서 등록하기
    jobs = [{"order": order, "priority": priority} for order, priority in enumerate(priorities)]

    # 출력 순서
    count = 0
    while jobs:
        target = jobs.pop(0)
        for job in jobs:
            if target["priority"] < job["priority"]:
                jobs.append(target)
                break
        else:
            count += 1
            if target["order"] == location:
                return count
```

```javascript
// javascript
function solution(priorities, location) {
    let answer = 0;
    const queue = priorities.map((priority, location) => ({priority, location}));
    
    while(queue.length > 0) {
        const target = queue.shift();
        const hasHighPriority = queue.some(v => v.priority > target.priority);

        if(hasHighPriority) {
            queue.push(target);   
        }else {
            answer += 1;
            if(target.location === location) break;
        }
    }
    return answer;
}
```