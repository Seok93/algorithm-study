### 🔍 문제 링크
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
**예제 #1**  
"leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

**예제 #2**  
"vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

**예제 #3**  
"mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

### 📔 나의 알고리즘 순서
1. 참가자(`participant`)와 완주자(`completion`)을 정렬한다.
2. 참가자와 완주자 목록을 순서대로 접근하여 일치하는지 확인한다.  
   2-1. 일치한다면, 완주했으니 다음 참가자를 확인한다.  
   2-2. 일치하지 않는다면, 참가는 했으나 완주를 못했으니 완주하지 못한 선수로써 반환한다.

### ✅ 나의 해답코드
```javascript
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}
```

### ✨ 깔끔한 해답코드
```javascript
function solution(participant, completion) {
  const map = new Map();

  participant.forEach((p) => {
    map.set(p, map.has(p) ? map.get(p) + 1 : 1);
  });

  completion.forEach((c) => {
    map.set(c, map.get(c) - 1);
  });

  for (const [key, value] of map) {
    if (value > 0) return key;
  }
}
```
