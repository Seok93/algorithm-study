### 🔍 문제 링크
[Level **문자열 나누기** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/140108)

### 📘 문제 설명
문자열 `s`가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 합니다.

- 먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
- 이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다. 처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
- `s`에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다.
- 만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료합니다.
  
문자열 `s`가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, 분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.

### 📕 제한사항
1 ≤ `s`의 길이 ≤ 10,000
`s`는 영어 소문자로만 이루어져 있습니다.

### 📙 입출력 예
|s|result|
|:---|:---|
|"banana"|3|
|"abracadabra"|6|
|"aaabbaccccabba"|3|

### 📒 입출력 예 설명
**입출력 예 #1**  
`s`="banana"인 경우 ba - na - na와 같이 분해됩니다.

**입출력 예 #2**  
`s`="abracadabra"인 경우 ab - ra - ca - da - br - a와 같이 분해됩니다.

**입출력 예 #3**  
`s`="aaabbaccccabba"인 경우 aaabbacc - ccab - ba와 같이 분해됩니다.

### 📔 나의 알고리즘 순서
1) 첫 번째 문자를 기준으로 설정하고, 문자에 하나씩 접근한다.
2) 첫문자 같은 문자와 다른 문자로 나눠, 개수를 측정한다.
3) 같은 문자와 다른 문자의 개수를 비교하여, 같으면 다음 문자를 새롭게 기준으로 잡아 1~3번 순서를 반복한다.

### ✅ 나의 해답코드
```javascript
function solution(s) {
    let answer = 0;
    let target = '';
    let word = '';
    
    for(const c of s) {
        if(!target) target = c;
        word += c;
        
        const sameCount = [...word].filter(elem => target === elem).length;
        const otherCount = [...word].filter(elem => target !== elem).length;
        if(sameCount === otherCount) {
            target = '';
            word = '';
            answer++;
        }
    }
    
    return word ? ++answer :answer;
}
```

### ✨ 깔끔한 해답코드
※ 이번 문제는 쉬워서 그런지 대체로 모두가 비슷하게 풀이함, 그래서 이번엔 신기했던 풀이를 추가했다.
```javascript
// 재귀함수를 이용하여 풀이하는 방법
function solution(s, count=0) {
    if(!s) return count
    let [first, ...rest] = s.split("")
    let countSame = 1
    let countInSame = 0
    let i=0
    for(; i<rest.length; i++){
        if(rest[i] === first) countSame++
        else countInSame++
        if(countSame === countInSame) break
    }
    return solution(rest.slice(i+1).join(""), count+1)
}
```