function solution(skill, skill_trees) {
  let count = 0;

  // 1.사용자 스킬 트리를 순차적으로 접근한다.
  skill_trees.forEach((tree) => {
    // 2.선행 스킬 트리를 준수하나 확인한다.
    let index = 0;
    for (const next of tree) {
      if (!skill.includes(next)) continue;
      if (skill[index++] !== next) return;
      if (skill.length <= index) break;
    }
    count++;
  });
  return count;
}
