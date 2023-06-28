### 🔍 문제 링크
[Level2 **카펫** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/42842)

### 📘 문제 설명
Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

![카펫 이미지1](./imgs/img1.png)

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


### 📔 나의 알고리즘 순서
1. `brown`과 `yellow`를 더해 카펫의 크기를 구한다.
2. 소인수분해를 진행하여 나올 수 있는 경우의 수를 구한다.
3. 경우의 수 중 brown과 yellow의 각각의 개수를 충족하는 경우의 수를 탐색한다.
4. [가로, 세로]를 결과값으로 반환한다. (가로 >= 세로)

### ✅ 나의 해답코드
```javascript
function solution(brown, yellow) {
    const cases = [];
    const size = brown + yellow;
    
    for(let i = 2; i <= size/2; i++) {
        if(size % i === 0) cases.push([i, size/i]);
    }
    
    return cases
        .filter(([width, height]) => width >= height)
        .find(([width, height]) => {
            if((width - 2) * (height - 2) === yellow) return true;
            else return false;
        });
}
```

### ✨ 깔끔한 해답코드
```javascript
function solution(brown, yellow) {
    const answer = [];
    const sum = brown + yellow;

    for(let height=3; height<=brown; height++){
        if(sum % height === 0){
            let weight = sum / height;
            if( (height-2) * (weight-2) === yellow){
                return [weight, height];
            }
        }
    }

    return answer;
}
```

나의 해답코드의 경우 모든 경우의 수를 다 찾은 뒤, 문제의 조건을 충족하는 경우를 다시 찾아 반환하는데, 깔끔한 해답코드의 경우 하나씩 경우의 수를 찾아가며 조건이 충족될 시 바로 반환하기 때문에 연산 속도가 더 빠르다.

깔끔한 코드의 `height`를 3부터 시작하는 이유는 카펫의 최소 높이가 3부터 시작하기 때문이다. 노란색이 갈색 사이에 있으려면 적어도 높이가 3이 되어야 한다. 이후의 연산은 소인수분해와 색상의 블록 수와 같은지 비교하는 로직은 나의 해답코드와 같다.

나의 경우 문제를 수학적으로 소인수분해를 진행하여, 경우의 수를 구한 뒤에 조건을 충족하는 내용을 찾았지만, 이를 몰랐다면 높이를 최소에서 최대까지 하나씩 접근하면서 확인하는 것도 방법인 것 같다. 모든 경우의 수를 다 검사해봐야하니 문제의 분류처럼 완전탐색 문제로 분류할 수 있다. 좀 더 유연하게 사고하자.