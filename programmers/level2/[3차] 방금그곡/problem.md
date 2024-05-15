### 🔍 문제 링크
[Level2 **\[3차\] 방금그곡** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/17683)

### 📘 문제 설명
라디오를 자주 듣는 네오는 라디오에서 방금 나왔던 음악이 무슨 음악인지 궁금해질 때가 많다. 그럴 때 네오는 다음 포털의 '방금그곡' 서비스를 이용하곤 한다. 방금그곡에서는 TV, 라디오 등에서 나온 음악에 관해 제목 등의 정보를 제공하는 서비스이다.

네오는 자신이 기억한 멜로디를 가지고 방금그곡을 이용해 음악을 찾는다. 그런데 라디오 방송에서는 한 음악을 반복해서 재생할 때도 있어서 네오가 기억하고 있는 멜로디는 음악 끝부분과 처음 부분이 이어서 재생된 멜로디일 수도 있다. 반대로, 한 음악을 중간에 끊을 경우 원본 음악에는 네오가 기억한 멜로디가 들어있다 해도 그 곡이 네오가 들은 곡이 아닐 수도 있다. 그렇기 때문에 네오는 기억한 멜로디를 재생 시간과 제공된 악보를 직접 보면서 비교하려고 한다. 다음과 같은 가정을 할 때 네오가 찾으려는 음악의 제목을 구하여라.

- 방금그곡 서비스에서는 음악 제목, 재생이 시작되고 끝난 시각, 악보를 제공한다.
- 네오가 기억한 멜로디와 악보에 사용되는 음은 C, C#, D, D#, E, F, F#, G, G#, A, A#, B 12개이다.
- 각 음은 1분에 1개씩 재생된다. 음악은 반드시 처음부터 재생되며 음악 길이보다 재생된 시간이 길 때는 음악이 끊김 없이 처음부터 반복해서 재생된다. 음악 길이보다 재생된 시간이 짧을 때는 처음부터 재생 시간만큼만 재생된다.
- 음악이 00:00를 넘겨서까지 재생되는 일은 없다.
- 조건이 일치하는 음악이 여러 개일 때에는 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환한다. 재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환한다.
- 조건이 일치하는 음악이 없을 때에는 “`(None)`”을 반환한다.

**※ 문제에는 쓰여있지 않지만, B#도 있다.**

### 📕 입력 형식
입력으로 네오가 기억한 멜로디를 담은 문자열 `m`과 방송된 곡의 정보를 담고 있는 배열 `musicinfos`가 주어진다.

- `m`은 음 `1`개 이상 `1439`개 이하로 구성되어 있다.
- `musicinfos`는 `100`개 이하의 곡 정보를 담고 있는 배열로, 각각의 곡 정보는 음악이 시작한 시각, 끝난 시각, - - 음악 제목, 악보 정보가 '`,`'로 구분된 문자열이다.
- 음악의 시작 시각과 끝난 시각은 24시간 `HH:MM` 형식이다.
- 음악 제목은 '`,`' 이외의 출력 가능한 문자로 표현된 길이 `1` 이상 `64` 이하의 문자열이다.
- 악보 정보는 음 `1`개 이상 `1439`개 이하로 구성되어 있다.


### 📙 입출력 예
|m|musicinfos|answer|
|:---|:---|:---|
|"ABCDEFG"|["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]|"HELLO"|
|"CC#BCC#BCC#BCC#B"|["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]|"FOO"|
|"ABC"|["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]|"WORLD"|

### 📒 입출력 예 설명
첫 번째 예시에서 HELLO는 길이가 7분이지만 12:00부터 12:14까지 재생되었으므로 실제로 CDEFGABCDEFGAB로 재생되었고, 이 중에 기억한 멜로디인 ABCDEFG가 들어있다.
세 번째 예시에서 HELLO는 C#DEFGABC#DEFGAB로, WORLD는 ABCDE로 재생되었다. HELLO 안에 있는 ABC#은 기억한 멜로디인 ABC와 일치하지 않고, WORLD 안에 있는 ABC가 기억한 멜로디와 일치한다.

### 📔 나의 알고리즘 순서
1. #이 붙은 문자들을 다른 문자로 치환한다.
2. 음악 정보를 하나씩 가져와 재생된 시간을 구하고, 악보를 그만큼 반복해준다.
3. 악보에 찾고자하는 코드가 전부 들어있는지 확인한다.
4. 모든 음악 정보를 확인할 때까지 2~3을 반복한다.
5. 찾은 음악 중 재생 시간이 제일 긴 음악을 반환한다. 만약 길이가 같은게 있다면 먼저 입력된 것을 반환한다.

### ✅ 나의 해답코드
```javascript
function solution(m, musicinfos) {
  const convertTimeToMinute = (time) => {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
  };
  const convertCode = (code) => {
    return code
      .replaceAll(/C#/g, 'c')
      .replaceAll(/D#/g, 'd')
      .replaceAll(/F#/g, 'f')
      .replaceAll(/G#/g, 'g')
      .replaceAll(/A#/g, 'a')
      .replaceAll(/B#/g, 'b');
  };

  const musicList = [];
  const convertedM = convertCode(m);
  musicinfos.forEach((info) => {
    const [start, end, title, code] = info.split(',');
    const convertedCode = convertCode(code);

    const time = convertTimeToMinute(end) - convertTimeToMinute(start);
    const repeat = Math.floor(time / convertedCode.length);
    const remainder = time % convertedCode.length;
    const flowCode = convertedCode.repeat(repeat) + convertedCode.slice(0, remainder);

    const regex = new RegExp(`${convertedM}`, 'g');
    if (regex.test(flowCode)) musicList.push([title, time]);
  });

  if (musicList.length === 0) return '(None)';

  const max = Math.max(...musicList.map((music) => music[1]));
  return musicList.filter((music) => music[1] === max)[0][0];
}
```

### 🤔고민한점 & 💡배운점
1\) 🤔 문제를 읽고, 각 코드들을 토큰화하여 나누기 위하여 정규표현식을 사용하였다. 이후 시간을 계산하여 반복된 악보를 만들고, 사용자가 기억한 멜로디가 포함되어 있는지 확인하여 문제를 해결하려고 했다. 그렇게 작성된 1차 코드는 아래와 같다.

```javascript
function solution(m, musicinfos) {
  const convertTimeToMinute = (time) => {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
  };

  const musicList = [];
  const regex = /C#|C|D#|D|E|F#|F|G#|G|A#|A|B/g;
  musicinfos.forEach((info) => {
    const [start, end, title, codeSet] = info.split(',');
    const codeSetLength = codeSet.match(regex)?.length;

    const time = convertTimeToMinute(end) - convertTimeToMinute(start);
    const repeat = Math.floor(time / codeSetLength);
    const remainder = time % codeSetLength;
    const flowCodeSet = codeSet.repeat(repeat) + codeSet.slice(0, remainder);

    const splitedM = m.match(regex);
    const splitedFlowCode = flowCodeSet.match(regex);

    let index = 0;
    for (const code of splitedFlowCode) {
      if (splitedM[index++] !== code) index = 0;
      if (splitedM.length === index) {
        musicList.push({ title, time });
        break;
      }
    }
  });

  if (musicList.length === 0) return '(None)';

  const maxTime = Math.max(...musicList.map((music) => music?.time));
  return musicList.filter((music) => music.time === maxTime)[0]?.title;
}
```

위의 코드는 `코드 실행`을 할 때엔 통과하지만, `제출 추 채점하기`의 일부 테스트 케이스에서 런타임 에러를 일으켰다. 그래서 런타임 에러를 일으키는 요인을 찾기 위해 가능성이 있는 곳을 찾았다.

1. 배열의 인덱스 범위를 초과하여 undefined가 리턴되었는데, 내부 멤버에 접근하여 런타임 에러가 생긴 경우
2. `String.prototype.match` 메서드를 통해 나온 결과가 undefined인데, for...of 연산자를 사용하여 iterator가 없어 런타임 에러가 생긴 경우

위의 경우의 수가 유일하게 런타임 에러가 일으키는 구간이 아닐까 생각했다. 실제로 2번에서 문제가 발생했다. 테스트케이스에는 악보에 사용하는 문자열 이외에도 다른 문자열이 있어 match가 제대로 진행되지 않는 것 같았다.


2\) 🤔 또 다른 문제로는 `C#`과 같은 2개의 문자가 하나의 의미를 가진 토큰이라는 점이었다. 정규표현식으로 나눠서 비교할 수는 있었지만, 최종 문자열을 비교할 때 `#`때문에 비교가 어려워지는 문제가 있었다. 그래서 1차 문제 풀이 방법은 좋은 풀이가 아니라는 생각이 들었다. 

이후 고민을 하다가 좋은 방법이 떠오르지 않아서 다른 사람의 해결 방법을 찾아보았다. 그러니 정말 간단한 방법이 있었다. 왜 생각하지 못했는지 모르겠다.💦

**방법은 바로 `C#`과 같이 의미를 가진 토큰을 하나의 문자로 치환하는 것이었다.** 이 방법을 이용하면 문자를 나누기도 편하고, 비교할 때에도 편해진다.

2\) 💡 정규표현식에서 문자열을 나열할 때, 앞에 먼저 나온 문자열을 먼저 탐색해준다.

```js
const regex = /C#|C|D#|D|E|F#|F|G#|G|A#|A|B/g;
```
`C#`을 `C`보다 먼저 두었으므, 먼저 비교하고 매칭해준다. 만약 반대가 된다면 `C#`보다 `C`를 먼저 매칭하므로 `C#`에서 `C`만 걸러내기 때문에 제대로 토큰화를 진행할 수 없다.

3\) 💡`String.prototype.match` 메서드에서 g 플래그 유무에 따라 결과가 달라진다는 것을 알게 되었다. 왜 이렇게 차이가 발생하는지 MDN 문서를 찾아보았고 다음과 같은 사실을 알게 되었다.

> [String.prototype.match MDN 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/match#%EC%84%A4%EB%AA%85)
> 
> g플래그가 포함되어있지 않으면, `RegExp.exec()`와 같은 결과를 반환한다.

### 🔍참고 내용
1. [카카오 해설](https://tech.kakao.com/2017/11/14/kakao-blind-recruitment-round-3/#%EB%AC%B8%EC%A0%9C4-%EB%B0%A9%EA%B8%88%EA%B7%B8%EA%B3%A1)