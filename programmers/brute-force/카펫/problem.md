## ✨ 완전탐색
[Level2 **카펫** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/42842) 

### 📘 문제 설명
Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

![카펫 예시1](./imgs/카펫1.png)

Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

### 📕 제한사항
- 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
- 노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
- 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

### 📙 입출력 예
|brown|yellow|return|
|:---|:---|:---|
|10|2|[4, 3]|
|8|1|[3, 3]|
|24|24|[8, 6]|

### 📗 개인적인 문제 해설
> 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.
 
> 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

중앙의 노란색 개수를 소인수분해하여, 모든 `[width, height]`를 구해야겠다고 생각했다.

- 소인수분해를 해주는 함수 정의
- 인수들의 모든 케이스를 고려하여, 가능한 `[width, height]`의 조합을 구하는 함수 정의

> 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

테두리를 담당하는 갈색은 항상 노란색보다 width, heigth가 2칸 많다. 그래야 갈색 테두리가 노란색을 감쌀 수 있다.



### ✅ 해답코드
```javascript
// 다시 풀어볼 것
// 3, 6, 7, 8, 10번 테스트 케이스 실패....
function factorization(number, store) {
    for(let i = 2; i < number; i++) {
        // 나누어지면 인수이다.
        if(number%i === 0) {
            number = number/i;
            store.push(i);
            factorization(number, store);
            return;
        }
    }
    
    // 나누어지지 않으면 소수 형태의 인수이다.
    if(number > 0) store.push(number);
}

function combination(numbers, frontGroupLength, store) {
    const backGroupLength = numbers.length - frontGroupLength;
    
    if(backGroupLength >= 0) {
        let frontGroup = numbers.slice(0, frontGroupLength); 
        let backGroup = numbers.slice(frontGroupLength);
        console.log(frontGroup, backGroup);

        backGroup = (backGroup.length !== 0) ? backGroup : [1];

        let frontNum = 1;
        frontGroup.forEach( number => {
            frontNum *= number;
        });

        let lastNum = 1;
        backGroup.forEach( number => {
            lastNum *= number;
        });

        store.add([frontNum, lastNum].sort((a, b) => b - a).map(data => data + 2));
        combination(numbers, frontGroupLength + 1, store);
    }
}

function solution(brown, yellow) {
    var answer = [];
    const totalCell = brown + yellow;
    
    // 1. 소인수분해를 진행한다.
    const numbers = [];
    factorization(yellow, numbers);
    
    // 2. 소인수분해의 인수들을 조합 구하기
    const cases = new Set();
    combination(numbers, 1, cases);
    
    // 3. 조합 중 가로, 세로 높이에 합당한 경우 찾기
    for(let [width, height] of cases) {
        const tCell = width * height;     
        if(totalCell === tCell) {
            return [width, height];
        }
    }
}
```