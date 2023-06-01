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
