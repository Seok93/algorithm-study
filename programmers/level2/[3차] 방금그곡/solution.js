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
