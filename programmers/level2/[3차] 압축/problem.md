### 🔍 문제 링크
[Level2 **[3차] 압축** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/17684);

### 📘 문제 설명
신입사원 어피치는 카카오톡으로 전송되는 메시지를 압축하여 전송 효율을 높이는 업무를 맡게 되었다. 메시지를 압축하더라도 전달되는 정보가 바뀌어서는 안 되므로, 압축 전의 정보를 완벽하게 복원 가능한 무손실 압축 알고리즘을 구현하기로 했다.

어피치는 여러 압축 알고리즘 중에서 성능이 좋고 구현이 간단한 LZW(Lempel–Ziv–Welch) 압축을 구현하기로 했다. LZW 압축은 1983년 발표된 알고리즘으로, 이미지 파일 포맷인 GIF 등 다양한 응용에서 사용되었다.

LZW 압축은 다음 과정을 거친다.

1. 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 `w`를 찾는다.
3. `w`에 해당하는 사전의 색인 번호를 출력하고, 입력에서 `w`를 제거한다.
4. 입력에서 처리되지 않은 다음 글자가 남아있다면(`c`), `w+c`에 해당하는 단어를 사전에 등록한다.
5. 단계 2로 돌아간다.

압축 알고리즘이 영문 대문자만 처리한다고 할 때, 사전은 다음과 같이 초기화된다. 사전의 색인 번호는 정수값으로 주어지며, 1부터 시작한다고 하자.

|색인 번호|1|2|3|...|24|25|26|
|:---|:---|:---|:---|:---|:---|:---|:---|
|단어|A|B|C|...|X|Y|Z|

예를 들어 입력으로 `KAKAO`가 들어온다고 하자.

1. 현재 사전에는 `KAKAO`의 첫 글자 `K`는 등록되어 있으나, 두 번째 글자까지인 `KA`는 없으므로, 첫 글자 `K`에 해당하는 색인 번호 11을 출력하고, 다음 글자인 `A`를 포함한 `KA`를 사전에 27 번째로 등록한다.
2. 두 번째 글자 `A`는 사전에 있으나, 세 번째 글자까지인 `AK`는 사전에 없으므로, `A`의 색인 번호 1을 출력하고, `AK`를 사전에 28 번째로 등록한다.
3. 세 번째 글자에서 시작하는 `KA`가 사전에 있으므로, `KA`에 해당하는 색인 번호 27을 출력하고, 다음 글자 `O`를 포함한 `KAO`를 29 번째로 등록한다.
4. 마지막으로 처리되지 않은 글자 `O`에 해당하는 색인 번호 15를 출력한다.

|현재 입력(w)|다음 글자(c)|출력|사전 추가(w+c)|
|:---|:---|:---|:---|
|K|A|11|27: KA|
|A|K|1|28: AK|
|KA|O|27|29: KAO|
|O|	|15	||

이 과정을 거쳐 다섯 글자의 문장 `KAKAO`가 4개의 색인 번호 [11, 1, 27, 15]로 압축된다.

입력으로 `TOBEORNOTTOBEORTOBEORNOT`가 들어오면 다음과 같이 압축이 진행된다.

|현재 입력(w)|다음 글자(c)|출력|사전 추가(w+c)|
|:---|:---|:---|:---|
|T|O|20|27: TO|
|O|B|15|28: OB|
|B|E|2|29: BE|
|E|O|5|30: EO|
|O|R|15|31: OR|
|R|N|18|32: RN|
|N|O|14|33: NO|
|O|T|15|34: OT|
|T|T|20|35: TT|
|TO|B|27|36: TOB|
|BE|O|29|37: BEO|
|OR|T|31|38: ORT|
|TOB|E|36|39: TOBE|
|EO|R|30|40: EOR|
|RN|O|32|41: RNO|
|OT| |34| |

### 📕 제한사항
입력 형식: 입력으로 영문 대문자로만 이뤄진 문자열 msg가 주어진다. msg의 길이는 1 글자 이상, 1000 글자 이하이다.

출력 형식: 주어진 문자열을 압축한 후의 사전 색인 번호를 배열로 출력하라.

### 📙 입출력 예
|msg|answer|
|:---|:---|
|KAKAO|[11, 1, 27, 15]|
|TOBEORNOTTOBEORTOBEORNOT|[20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]|
|ABABABABABABABAB|[1, 2, 27, 29, 28, 31, 30]|

### 📔 나의 알고리즘 순서
1. 문자를 하나 가져와 문자열에 붙인다.
2. 문자열이 사전에 등록되어 있는지 확인한다.
3. 사전에 있으면, 1번부터 다시 반복한다.
4. 사전에 없다면, 사전에 등록하여 색인을 만들고 마지막 문자부터 다시 시작한다.
5. 탐색중인 메세지의 끝에 도달할 때까지 반복한다.

# ✅ 나의 해답코드
```javascript
// 풀이 1
// 단순하게 한 문자씩 가져와서 확인하는 방법 (배열 효율성 고려x)
function solution(msg) {
    const answer = [];
    const dictionary = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    const msgList = msg.split('');
    
    let word = '';
    let prevIndex = -1;
    while(msgList.length) {
        word += msgList.shift();
        const index = dictionary.indexOf(word);
        const hasWord = index > -1;
        
        if(!hasWord) {
            dictionary.push(word);
            answer.push(prevIndex);
            msgList.unshift(word[word.length - 1]);
            word = '';
        }
        prevIndex = index;
    }
    answer.push(prevIndex);
    return answer;
}
```

```javascript
// 풀이 2
// 투포인터를 이용하여 배열 삽입/삭제가 일어나지 않게 변경
// ※ 배열 삽입/삭제의 복잡도 O(n)연산
function solution(msg) {
  const answer = [];
  const dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  let [start, end] = [0, 0];
  let prevIndex = -1;
  while (true) {
    // 탐색 중인 메세지가 끝에 도달했으면 종료
    if (end >= msg.length) {
      answer.push(prevIndex + 1);
      break;
    }

    // 투포인터가 가리키는 문자열을 가져오기
    const target = msg.slice(start, end + 1);
    const index = dictionary.indexOf(target);
    const hasWord = index > -1;

    // 사전에 등록되지 않았다면, 색인 등록후 마지막 문자부터 다시 검사
    if (!hasWord) {
      dictionary.push(target);
      answer.push(prevIndex + 1);
      prevIndex = -1;
      start = end;
      continue;
    }
    // 사전에 등록되어 있다면, 저장후 다시 검사
    prevIndex = index;
    end++;
  }
  return answer;
}

```

### 🤔고민한점 & 💡배운점
1\) 🤔 문제 자체는 투포인터로 풀었다. 배열의 삽입/삭제 연산이 O(n)이기 때문에 매번 문자를 하나씩 추출할 때마다 연산 효율이 좋지 않을거라 생각했다. 그래서 실제로 배열을 움직이지 않고, 시작 위치와 끝 위치를 포인터로 활용하는 투포인터를 통해 현재 검사중인 문자열을 만들어내고, 문자열이 사전에 등록되어 있는지를 확인하는 방식으로 구현했다.

2\) 💡LZW 압축 알고리즘이라는 개념을 문제를 읽으면서 처음 배웠다. 단어가 등록되어 있는 사전을 통해 매핑을 시작하고, 등록되지 않은 문자열을 등록하는 방법으로 뒤로 갈수록 문자 압축률을 높이는 방법이다. 복원도 색인을 통해 문자를 복원할 수 있어서 무손실 압축 기법으로 사용할 수 있다. 재미있는 문제였다.
