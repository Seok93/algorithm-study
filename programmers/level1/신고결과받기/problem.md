### 🔍 문제 링크
[Level1 **신고 결과 받기** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/92334)

### 📘 문제 설명
신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.

- 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
  - 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
  - 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
- k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
  - 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
  
다음은 전체 유저 목록이 ["muzi", "frodo", "apeach", "neo"]이고, k = 2(즉, 2번 이상 신고당하면 이용 정지)인 경우의 예시입니다.

|유저 ID|유저가 신고한 ID|설명|
|:---|:---|:---|
|"muzi"|"frodo"|"muzi"가 "frodo"를 신고했습니다.|
|"apeach"|"frodo"|"apeach"가 "frodo"를 신고했습니다.|
|"frodo"|"neo"|"frodo"가 "neo"를 신고했습니다.|
|"muzi"|"neo"|"muzi"가 "neo"를 신고했습니다.|
|"apeach"|"muzi"|"apeach"가 "muzi"를 신고했습니다.|

각 유저별로 신고당한 횟수는 다음과 같습니다.

|유저 ID|신고당한 횟수|
|:---|:---|
|"muzi"|1|
|"frodo"|2|
|"apeach"|0|
|"neo"|2|

위 예시에서는 2번 이상 신고당한 "frodo"와 "neo"의 게시판 이용이 정지됩니다. 이때, 각 유저별로 신고한 아이디와 정지된 아이디를 정리하면 다음과 같습니다.

|유저 ID|유저가 신고한 ID|정지된 ID|
|:---|:---|:---|
|"muzi"|["frodo", "neo"]|["frodo", "neo"]|
|"frodo"|["neo"]|["neo"]|
|"apeach"|["muzi", "frodo"]|["frodo"]|
|"neo"|[ ]|[ ]|

따라서 "muzi"는 처리 결과 메일을 2회, "frodo"와 "apeach"는 각각 처리 결과 메일을 1회 받게 됩니다.

이용자의 ID가 담긴 문자열 배열 `id_list`, 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 `report`, 정지 기준이 되는 신고 횟수 `k`가 매개변수로 주어질 때, 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하도록 solution 함수를 완성해주세요.

### 📕 제한사항
- 2 ≤ `id_list`의 길이 ≤ 1,000
  - 1 ≤ `id_list`의 원소 길이 ≤ 10
  - `id_list`의 원소는 이용자의 id를 나타내는 문자열이며 알파벳 소문자로만 이루어져 있습니다.
  - `id_list`에는 같은 아이디가 중복해서 들어있지 않습니다.
- 1 ≤ `report`의 길이 ≤ 200,000
  - 3 ≤ `report`의 원소 길이 ≤ 21
  - `report`의 원소는 "이용자id 신고한id"형태의 문자열입니다.
  - 예를 들어 "muzi frodo"의 경우 "muzi"가 "frodo"를 신고했다는 의미입니다.
  - id는 알파벳 소문자로만 이루어져 있습니다.
  - 이용자id와 신고한id는 공백(스페이스)하나로 구분되어 있습니다.
  - 자기 자신을 신고하는 경우는 없습니다.
- 1 ≤ `k` ≤ 200, `k`는 자연수입니다.
- return 하는 배열은 `id_list`에 담긴 id 순서대로 각 유저가 받은 결과 메일 수를 담으면 됩니다.

### 📙 입출력 예
|id_list|report|k|result|
|:---|:---|:---|:---|
|["muzi", "frodo", "apeach", "neo"]|["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]|2|[2,1,1,0]|
|["con", "ryan"]|["ryan con", "ryan con", "ryan con", "ryan con"]|3|[0,0]|

### 📒 입출력 예 설명
**입출력 예 #1**  
문제의 예시와 같습니다.

**입출력 예 #2**  
"ryan"이 "con"을 4번 신고했으나, 주어진 조건에 따라 한 유저가 같은 유저를 여러 번 신고한 경우는 신고 횟수 1회로 처리합니다. 따라서 "con"은 1회 신고당했습니다. 3번 이상 신고당한 이용자는 없으며, "con"과 "ryan"은 결과 메일을 받지 않습니다. 따라서 [0, 0]을 return 합니다.

### 📔 나의 알고리즘 순서
1) 유저 정보에 유저가 누구에게 신고 당했는지 저장한다. ( 같은 대상에게 여러번 신고 당해도 1회로 간주)  
2) 유저 정보를 순회하며 k번 이상 신고 당한 사람인지 판별한다.  
  2-1) k번 이상인 경우, 신고한 사람들의 신고 처리 성공 횟수를 +1 증가시킨다.  
  2-2) k번 이상이 아닌 경우, 다음 유저 정보로 넘어간다.
3) id_list 순으로 유저 신고 성공 횟수를 배열로 묶어서 반환한다.

### ✅ 나의 해답코드
```javascript
function solution(id_list, report, k) {
  const users = {};

  id_list.forEach((id) => {
    users[id] = { reported: new Set(), success: 0 };
  });

  report.forEach((content) => {
    const [reporter, target] = content.split(' ');
    users[target].reported.add(reporter);
  });

  for (const user in users) {
    const userInfo = users[user];
    if (userInfo.reported.size >= k) {
      userInfo.reported.forEach((reporter) => {
        users[reporter].success += 1;
      });
    }
  }

  return id_list.map((id) => users[id].success);
}

```

### ✨ 깔끔한 해답코드
```javascript
// Set, Map 객체 활용
// 논리연산자의 단축 연산 특성 활용
function solution(id_list, report, k) {
    // 신고 목록 정리
    let reports = [...new Set(report)].map(report => report.split(' '));
    
    // 유저별 신고 당한 횟수 정리
    let counts = new Map();
    for (const [reporter, target] of reports){
        counts.set(target, counts.get(target)+1 || 1);
    }
    
    // k번 이상 신고 당한 유저를 신고한 사람의 결과 메일 횟수 정리
    let results = new Map();
    for(const [reporter, target] of reports){
        if(counts.get(target) >= k){
            results.set(reporter, results.get(reporter)+1 || 1)
        }
    }
    
    return id_list.map(id => results.get(id) || 0);
}
```

### 📝고민한점 & 💡배운점
**1\) 🤔같은 대상에게 여러번 신고 당해도 1회로 간주하려면 어떻게 해야할까?**  
결론부터 말하자면, Set 객체를 이용하면 중복을 허용하지 않으므로, 자동으로 1회 신고로 간주할 수 있다.

처음에는 `reported`를 단순한 유저 아이디를 저장하는 배열로 만드려고 했다. 문제는 배열에 데이터를 삽입할 때, `Array.prototype.includes` 메서드로 매번 대상이 있는지 확인하는 작업이 필요했다. 이렇게 중복 체크에 신경쓰지 않더라도 자동으로 1회 신고로 간주하기에 좋은 방법이 무엇이 있을지 고민하다가 Set 객체를 이용하면 중복을 허용하지 않으므로 중복 체크에 신경쓰지 않아도 된다는 점이 생각나 이용하게 되었다.