## ✨ 탐욕법
[Level2 **큰 수 만들기** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/42883) 

### 📘 문제 설명
어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

### 📕 제한사항
- number는 2자리 이상, 1,000,000자리 이하인 숫자입니다.
- k는 1 이상 number의 자릿수 미만인 자연수입니다.

### 📙 입출력 예
|number|k|return|
|:---|:---|:---|
|"1924"|2|"94"|
|"1231234"|3|"3234"|
|"4177252841"|4|"775841"|

### 📗 개인적인 문제 해설
> number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태

보자마자 어렵게 생각할 것 없이, 맨 앞자리부터 비교하여 앞의 숫자가 뒤의 숫자보다 작을 때, 앞의 숫자를 삭제하면 가장 큰 수가 나온다는 것을 알았다. 예를 들어 1234 가 있다면, 1이 2보다 작음으로 1을 삭제하여 234를 반환하는 것이 가장 크다는 것이다.

그리고 추가적으로 위의 방법으로 제거하는 숫자가 k보다 작은 경우가 생기는데, 추가적으로 삭제할 분량을 맨 뒷자리에서 잘라내면 된다고 생각했다.

1차 풀이를 진행하고, 문제 없이 통과하리라 생각했지만, 테스트 10번에서 시간 초과가 발생했다. 때문에 연산횟수를 줄일 필요가 있다고 생각했다. 1차 풀이는 O(n^2)으로 굉장히 느린 방법이고, 이미 검사를 맞쳤음에도 불구하고 지속적으로 처음부터 자리를 비교하는 점이 문제였다.

2차풀이 방법에서 비교는 딱 한 번 진행하되, 처음 세웠던 원칙 `맨 앞자리부터 비교하여 앞의 숫자가 뒤의 숫자보다 작을 때, 앞의 숫자를 삭제하면 가장 큰 수가 나온다는 것`을 적용하는 방법을 진행했다. 해당 조건을 충족하지 못하면 비교를 맞췄다는 의미로 memo라는 곳에 순차적으로 저장했다.


### ✅ 해답코드
```javascript
// 1차 풀이
// 테스트 10번에서 시간 초과 발생
function solution(number, k) {
    const answer = [...number];
    let count = 0;
    
    for(let i = 0; i < k; i++) {
        for(let j = 0; j < answer.length - 1; j++) {
            if(answer[j] < answer[j + 1]) {
                answer.splice(j, 1);
                count++;
                break;
            }   
        }
    }
    
    if(k > count) {
        const restCnt = k - count;
        answer.splice(answer.length - restCnt, restCnt);
    }
    
    return answer.join("");
}
```

``` javascript
// 2차 풀이
function solution(number, k) {
    const memo = [];
    
    for(let i = 0; i < number.length; i++) {
        /**
         * 1. 비교할 대상이 있는지
         * 2. k개만큼 삭제했는지
         * 3. 앞자리가 뒷자리보다 작은지
         * 딱 한 번만 비교해본다.
         */
        while(memo.length > 0 && k > 0 && memo[memo.length - 1] < number[i]) {
            memo.pop();
            k--;
        }
        memo.push(number[i]);
    }
    memo.splice(memo.length - k, k);
    
    return memo.join("");
}
```