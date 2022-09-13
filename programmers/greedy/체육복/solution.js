function solution(n, lost, reserve) {
  // 1. 기본적으로 모두 한 벌씩 있음
  const students = new Array(n).fill(1);

  // 2. 여분이 있는 학생들은 한 벌씩 더 있음
  reserve.forEach((target) => (students[target - 1] += 1));

  // 3. 도난 당한 학생들은 한 벌씩 사라짐
  lost.forEach((target) => (students[target - 1] -= 1));

  // 4. 여분이 있는 친구한테 빌리기
  students.forEach((student, index) => {
    if (student === 0) {
      if (students[index - 1] === 2) {
        students[index - 1] -= 1;
        students[index] += 1;
      } else if (students[index + 1] === 2) {
        students[index + 1] -= 1;
        students[index] += 1;
      }
    }
  });

  return students.filter((student) => student > 0).length;
}
