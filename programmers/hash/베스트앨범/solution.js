function solution(genres, plays) {
  const genreTotal = {};

  // 1. 장르별 총 재생수 구하기
  genres.forEach((genre, idx) => {
    genreTotal[genre] = genreTotal[genre] ? genreTotal[genre] + plays[idx] : plays[idx];
  });

  // 2. 기준 조건을 통해 나열하기 (장르 기준 > 음악 재생수 기준 > 고유번호순)
  let result = genres.map((genre, index) => ({ genre, play: plays[index], index }));
  result.sort((a, b) => {
    if (a.genre !== b.genre) return genreTotal[b.genre] - genreTotal[a.genre];
    if (a.play !== b.play) return b.play - a.play;
    return a.index - b.index;
  });

  // 3. 각 장르에서 인기있는 노래 최대 2곡씩 추출
  const genreMusicCnt = {};
  result = result.filter((item) => {
    if (genreMusicCnt[item.genre] >= 2) return false;
    genreMusicCnt[item.genre] = genreMusicCnt[item.genre] ? genreMusicCnt[item.genre] + 1 : 1;
    return true;
  });

  // 4. 앨범 목록에서 고유번호만 추출
  result = result.map((item) => item.index);

  return result;
}
