function solution(name, yearning, photos) {
  const friends_yearning = {};

  name.forEach((friend, index) => {
    friends_yearning[friend] = yearning[index];
  });

  return photos.map((photo) =>
    photo.reduce((sum, friend) => sum + (friends_yearning[friend] || 0), 0)
  );
}
