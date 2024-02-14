function solution(record) {
  const users = {};
  const logs = [];
  const messages = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.',
  };

  record.forEach((log) => {
    const [command, id, nick] = log.split(' ');
    switch (command) {
      case 'Enter':
        users[id] = nick;
        logs.push([command, id]);
        break;
      case 'Change':
        users[id] = nick;
        break;
      case 'Leave':
        logs.push([command, id]);
        break;
    }
  });

  return logs.map(([command, id]) => `${users[id]}${messages[command]}`);
}
