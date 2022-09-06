## ✨ 정렬
[Level2 **가장 큰 수** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/42746) 

### 📘 문제 설명
0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

### 📕 제한사항
- numbers의 길이는 1 이상 100,000 이하입니다.
- numbers의 원소는 0 이상 1,000 이하입니다.
- 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

### 📙 입출력 예
|numbers|return|
|:---|:---|
|[6, 10, 2]|"6210"|
|[3, 30, 34, 5, 9]|"9534330"|


### 📗 개인적인 문제 해설
> 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

주어진 숫자로 만들 수 있는 모든 케이스를 만들고, 정렬 해야 한다고 생각했다.    
붙이다 보면 같은 숫자가 나올 수 있으니, set으로 만들어야겠다.

<span style="color: #FF5555;">문제는 시간 초과가 뜨더라...</span>

다른 방법을 생각하다 숫자를 앞에 붙이냐, 뒤에 붙이냐에 따라 크기가 변하고, 최종적으로 제일 큰 수를 구하고 싶은 것이니, sort 함수를 이용해서 앞에 붙이거나 뒤에 붙이는 걸로 나열해보는 방법을 생각했다. 

이후에 테스트 11에서 문제가 발생해서 잘 생각해보니, 모든 인자가 0이면, "00000"으로 나오니 원하는 "0"과는 다를 수 있다고 생각하여, 숫자로 한 번 변환했다가 다시 문자열로 변경해야겠다고 생각했다.

<span style="color: #FF5555;">"0000" 인 케이스틑 해결되지만, 문제에서 정답이 길 수 있으니, 문자열로 반환하라는 것을 보니, 중간에 parseInt나 Number로 변경하면 숫자를 다 담을 수 없나보다... 다른 방법이 필요하다.</span>

그래서 맨 앞의 문자가 0인 경우 0을 반환하고 아니면 그대로 반환하는 방법을 사용

### ✅ 해답코드
```javascript
// 모든 경우의 수를 구하고, 정렬하는 방법
// 부분적으로 시간초과가 나왔다...
function bfs(target, numbers, set) {
    if(numbers.length === 0) {
        set.add(target);
    }else {
        numbers.forEach((num, idx) => {
            const newNumbers = [...numbers];
            newNumbers.splice(idx, 1)
            bfs(`${target}${num}`, newNumbers, set);
        });
    }
}

function solution(numbers) {
    const answer = '';
    const numSet = new Set();
    
    bfs('', numbers, numSet);
    
    return Array.from(numSet.values()).sort((a, b)=> b-a)[0];
}

```

```javascript
function solution(numbers) {
    const answer = numbers.sort((a, b) => `${b}${a}`-`${a}${b}`).join("");
    return answer[0] === '0' ? '0' : answer;
    
}
```