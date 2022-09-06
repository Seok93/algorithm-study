## ✨ 완전탐색
[Level2 **소수찾기** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/42839) 

### 📘 문제 설명
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

### 📕 제한사항
- numbers는 길이 1 이상 7 이하인 문자열입니다.
- numbers는 0~9까지 숫자만으로 이루어져 있습니다.
- "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

### 📙 입출력 예
|numbers|return|
|:---|:---|
|"17"|3|
|"011"|2|

### 📒 입출력 예 설명
예제 #1
[1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.

예제 #2
[0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.

- 11과 011은 같은 숫자로 취급합니다.

### 📗 개인적인 문제 해설
> 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

> "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

위의 두 내용을 보고,**주어진 숫자를 한 자리 숫자로 나누고, 만들 수 있는 수의 조합을 다 구해야한다고 생각했다.** 모든 경우 수를 다 확인할 때엔 dfs를 사용하면 좋다고 생각하여 dfs를 구현하고자 했다.

> 소수가 몇 개인지

숫자들을 조합했을 때, 해당 숫자가 **소수인지 확인하는 함수도 필요**하다 생각했다.

### ✅ 해답코드
```javascript
function isPrime(num) {
    const sqrt = Math.floor(Math.sqrt(num));
    
    if(num <= 1) return false;
    
    for (let i = 2; i <= sqrt; i += 1) {
        if (num % i === 0) return false;
    }    
    return true;
}
 
function dfs(prev, numbers, visited, primes) {
    visited.forEach((visit, index) => {
        if(!visit) {
            visited[index] = 1;
            const current = prev + numbers[index];
            const number = parseInt(current, 10);

            // 만들어진 숫자가 소수인지 확인
            isPrime(number) && primes.add(number);
            dfs(current, numbers, visited, primes);
            visited[index] = 0;
        }
    });
}

function solution(numbers) {
    const primes = new Set();
    const visited = [...numbers].fill(0);
    
    // 주어진 숫자 내에서 가능한 모든 숫자의 조합 구하기
    dfs('', [...numbers], visited, primes);

    return primes.size;
}
```