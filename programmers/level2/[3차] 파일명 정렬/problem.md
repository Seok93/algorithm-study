### 🔍 문제 링크
[Level2 **[3차] 파일명 정렬** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/17686#)

### 📘 문제 설명
세 차례의 코딩 테스트와 두 차례의 면접이라는 기나긴 블라인드 공채를 무사히 통과해 카카오에 입사한 무지는 파일 저장소 서버 관리를 맡게 되었다.

저장소 서버에는 프로그램의 과거 버전을 모두 담고 있어, 이름 순으로 정렬된 파일 목록은 보기가 불편했다. 파일을 이름 순으로 정렬하면 나중에 만들어진 ver-10.zip이 ver-9.zip보다 먼저 표시되기 때문이다.

버전 번호 외에도 숫자가 포함된 파일 목록은 여러 면에서 관리하기 불편했다. 예컨대 파일 목록이 ["img12.png", "img10.png", "img2.png", "img1.png"]일 경우, 일반적인 정렬은 ["img1.png", "img10.png", "img12.png", "img2.png"] 순이 되지만, 숫자 순으로 정렬된 ["img1.png", "img2.png", "img10.png", img12.png"] 순이 훨씬 자연스럽다.

무지는 단순한 문자 코드 순이 아닌, 파일명에 포함된 숫자를 반영한 정렬 기능을 저장소 관리 프로그램에 구현하기로 했다.

소스 파일 저장소에 저장된 파일명은 100 글자 이내로, 영문 대소문자, 숫자, 공백(" "), 마침표("."), 빼기 부호("-")만으로 이루어져 있다. 파일명은 영문자로 시작하며, 숫자를 하나 이상 포함하고 있다.

파일명은 크게 HEAD, NUMBER, TAIL의 세 부분으로 구성된다.

- HEAD는 숫자가 아닌 문자로 이루어져 있으며, 최소한 한 글자 이상이다.
- NUMBER는 한 글자에서 최대 다섯 글자 사이의 연속된 숫자로 이루어져 있으며, 앞쪽에 0이 올 수 있다. 0부터 99999 사이의 숫자로, 00000이나 0101 등도 가능하다.
- TAIL은 그 나머지 부분으로, 여기에는 숫자가 다시 나타날 수도 있으며, 아무 글자도 없을 수 있다.

|파일명|HEAD|NUMBER|TAIL|
|:---|:---|:---|:---|
|foo9.txt|foo|9|.txt|
|foo010bar020.zip|foo|010|bar020.zip|
|F-15|F-|15|(빈 문자열)|

파일명을 세 부분으로 나눈 후, 다음 기준에 따라 파일명을 정렬한다.

- 파일명은 우선 HEAD 부분을 기준으로 사전 순으로 정렬한다. 이때, 문자열 비교 시 대소문자 구분을 하지 않는다. MUZI와 muzi, MuZi는 정렬 시에 같은 순서로 취급된다.
- 파일명의 HEAD 부분이 대소문자 차이 외에는 같을 경우, NUMBER의 숫자 순으로 정렬한다. 9 < 10 < 0011 < 012 < 13 < 014 순으로 정렬된다. 숫자 앞의 0은 무시되며, 012와 12는 정렬 시에 같은 같은 값으로 처리된다.
- 두 파일의 HEAD 부분과, NUMBER의 숫자도 같을 경우, 원래 입력에 주어진 순서를 유지한다. MUZI01.zip과 muzi1.png가 입력으로 들어오면, 정렬 후에도 입력 시 주어진 두 파일의 순서가 바뀌어서는 안 된다.
  
무지를 도와 파일명 정렬 프로그램을 구현하라.

### 📕 제한사항
입력으로 배열 files가 주어진다.

- `files`는 1000 개 이하의 파일명을 포함하는 문자열 배열이다.
- 각 파일명은 100 글자 이하 길이로, 영문 대소문자, 숫자, 공백(" "), 마침표("."), 빼기 부호("-")만으로 이루어져 있다. 파일명은 영문자로 시작하며, 숫자를 하나 이상 포함하고 있다.
- 중복된 파일명은 없으나, 대소문자나 숫자 앞부분의 0 차이가 있는 경우는 함께 주어질 수 있다. (`muzi1.txt`, `MUZI1.txt`, `muzi001.txt`, `muzi1.TXT`는 함께 입력으로 주어질 수 있다.)

### 📙 입출력 예
입력: ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]
출력: ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]

입력: ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]
출력: ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]

### 📔 나의 알고리즘 순서
1. 파일명을 HEAD, NUMBER, TAIL 부분으로 파싱한다.
2. HEAD, NUMBER, 입력순을 기준으로 정렬한다.
3. 정렬한 결과를 반환한다.

### ✅ 나의 해답코드
```javascript
function solution(files) {
  return files
    .map((file, idx) => {
      const regex = /^([a-zA-Z-. ]+)(\d+)(.*)/i;
      const [origin, head, number, tail] = file.match(regex);
      return { origin, head: head.toLowerCase(), number: Number(number), idx };
    })
    .sort((a, b) => {
      const { head: aHead, number: aNumber, idx: aIdx } = a;
      const { head: bHead, number: bNumber, idx: bIdx } = b;
      if (aHead !== bHead) return aHead > bHead ? 1 : -1;
      if (aNumber !== bNumber) return aNumber - bNumber;
      return aIdx - bIdx;
    })
    .map((f) => f.origin);
}

```

### 🤔고민한점 & 💡배운점
1\) 🤔 문제를 읽고 HEAD, NUMBER, TAIL 부분으로 나누는 것이 이번 문제의 핵심이라고 생각했다. 정규표현식의 그룹화를 이용하여 부분적으로 잘라내야겠다고 생각했다. 처음에는 중요한 HEAD와 NUMBER 부분의 정규 표현식을 만들었다.

```js
const headRegex = /^[a-zA-z-. ]/i;
const numberRegex = /\d+/;
```

각각을 실행하여 원하는 결과를 추출하는 것을 확인하고, 이후에 그룹화를 이용하여 합쳤다.

```js
const regex = /^([a-zA-Z-. ]+)(\d+)(.*)/i;
```

위의 정규표현식을 사용하면, 원하는 데이터를 순차적으로 추출할 수 있었다. 이후 정렬에 필요한 HEAD, NUMBER, INDEX, 파일명을 객체로 구성하여 반환한 후 sort 메서드를 이용하여 정렬한 값을 반환했다.

2\) 💡문제를 풀고 해설을 읽어봤다. `원래 입력에서 주어진 순서를 유지하는 안정 정렬(Stable Sort)을 사용해야 합니다.` 라는 부분을 읽고, stable sort에 대해 처음 알게 되었다.

안정 정렬의 종류: 삽입 정렬, 버블 정렬, 병합 정렬  
불안정 정렬의 종류: 선택 정렬, 퀵정렬, 힙 정렬, 인트로 정렬(퀵 정렬 + 힙 정렬), 계수 정렬


### 🔍참고 내용
1. [카카오 3차 코딩 테스트 문제 해설](https://tech.kakao.com/2017/11/14/kakao-blind-recruitment-round-3/#%EB%AC%B8%EC%A0%9C3-%ED%8C%8C%EC%9D%BC%EB%AA%85-%EC%A0%95%EB%A0%AC)
2. [안정 정렬 vs 불안정 정렬](https://velog.io/@good159897/%EC%95%88%EC%A0%95-%EC%A0%95%EB%A0%AC-VS-%EB%B6%88%EC%95%88%EC%A0%95-%EC%A0%95%EB%A0%AC-%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%9D%B8%ED%84%B0%EB%B7%B0)
3. [제자리 정렬 & 안정정렬](https://yummy0102.tistory.com/683)