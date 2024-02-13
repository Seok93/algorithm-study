function solution(friends, gifts) {
  const users = {};
  friends.forEach((id) => {
    users[id] = { gifter: {}, take: 0, give: 0, next: 0 };
  });

  gifts.forEach((log) => {
    const [giverId, takerId] = log.split(' ');
    const giver = users[giverId];
    const taker = users[takerId];

    taker.gifter[giverId] = (taker.gifter[giverId] || 0) + 1;
    giver.give += 1;
    taker.take += 1;
  });

  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      const [tid, fid] = [friends[i], friends[j]];
      const target = users[tid];
      const friend = users[fid];

      const take = target.gifter[fid] || 0;
      const give = friend.gifter[tid] || 0;

      if (take > give) {
        friend.next += 1;
      } else if (take < give) {
        target.next += 1;
      } else {
        const tGiftRate = target.give - target.take;
        const fGiftRate = friend.give - friend.take;
        if (tGiftRate > fGiftRate) {
          target.next += 1;
        } else if (tGiftRate < fGiftRate) {
          friend.next += 1;
        }
      }
    }
  }

  return Math.max(...Object.values(users).map((user) => user.next));
}
