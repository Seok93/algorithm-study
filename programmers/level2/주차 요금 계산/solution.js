function solution(fees, records) {
  const [baseTime, baseFee, unitTime, unitFee] = fees;
  const users = {};

  const calculateParkingTime = (curTime, prevTime) => {
    const [ch, cm] = curTime.split(':').map(Number);
    const [ph, pm] = prevTime.split(':').map(Number);
    return (ch - ph) * 60 + (cm - pm);
  };

  records.forEach((record) => {
    const [time, car, log] = record.split(' ');

    if (!(car in users)) {
      users[car] = { totalTime: 0, lastIn: '', isExist: false };
    }

    const user = users[car];
    switch (log) {
      case 'IN':
        user.lastIn = time;
        user.isExist = true;
        break;
      case 'OUT':
        user.totalTime += calculateParkingTime(time, user.lastIn);
        user.isExist = false;
        break;
    }
  });

  return [...Object.keys(users)].sort().map((car) => {
    const user = users[car];
    if (user.isExist) user.totalTime += calculateParkingTime('23:59', user.lastIn);

    if (baseTime >= user.totalTime) return baseFee;
    return baseFee + Math.ceil((user.totalTime - baseTime) / unitTime) * unitFee;
  });
}
