## ✨ 해시
[Level1 **완주하지 못한 선수** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/42576) 

### 📘 문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

### 📕 제한사항
- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.

### 📙 입출력 예
|participant|completion|return|
|:---|:---|:---|
|["leo", "kiki", "eden"]|["eden", "kiki"]|"leo"|
|["marina", "josipa", "nikola", "vinko", "filipa"]|["josipa", "filipa", "marina", "nikola"]|"vinko"|
|["mislav", "stanko", "mislav", "ana"]|["stanko", "ana", "mislav"]|"mislav"|

### 📒 입출력 예 설명
예제 #1   
"leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2   
"vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3   
"mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

### 📗 개인적인 문제 해설
>마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

hash문제로 볼 수는 있지만, 개인적으로는 hash 이외에도 여러가지 방법이 떠올라서 어떤 방법으로 풀지 고민이 되었다.

풀이1   
hash처럼 key와 value를 기준으로 정리해서 value값에 차이가 있거나, 존재하지 않는 key를 찾는 방법

풀이2   
완주 목록에서 한명씩 순차적으로 꺼내서 참가자 목록에서 지워나가고, 참가자 목록에 남은 최종인원을 찾는 방법

풀이3   
참가자 목록, 완주자 목록을 정렬하고, 참자가 목록에서 순차적으로 꺼내서 완주자 목록이랑 비교해서, 차이가 발생하면 완주하지 못한 선수이니 결과로 반환하는 방법

### 📔 알고리즘 순서
1\) 참가자 목록, 완주자 목록을 정렬한다.   
2\) 정렬된 참가자 목록과 완주자 목록을 순차적으로 비교해서 차이가 나는 부분을 찾는다.

### ✅ 해답코드
```javascript
function solution(participant, completion) {
    var answer = '';

    // 1. 참가자 목록, 완주자 목록을 정렬
    participant.sort();
    completion.sort();
    
    // 2. 정렬된 참가자 목록과 완주자 목록을 순차적으로 비교해서 차이가 나는 부분을 찾기
    for(let i = 0; i < participant.length; i ++) {
        if(participant[i] !== completion[i]) {
            answer = participant[i];
            break;
        }
    }
    
    return answer;
}
```