function solution(book_time) {
  let answer = 0;
  const convertTimeToMinute = (time) => {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
  };

  const logs = [];
  book_time.forEach((timeLog) => {
    const [checkIn, checkOut] = timeLog.map((time) => convertTimeToMinute(time));
    logs.push(['in', checkIn]);
    logs.push(['out', checkOut + 10]);
  });
  logs.sort((a, b) => {
    if (a[1] === b[1]) return a[0] > b[0] ? -1 : 1;
    return a[1] - b[1];
  });

  let room = 0;
  logs.forEach((log) => {
    const [type, time] = log;
    if (type === 'in') !room ? (answer += 1) : (room -= 1);
    else if (type === 'out') room += 1;
  });

  return answer;
}
