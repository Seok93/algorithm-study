function solution(N, stages) {
  const stageMap = new Map();
  const failure = [];
  const total = stages.length;
  let retiree = 0;

  stages.forEach((stage) => {
    stageMap.set(stage, stageMap.has(stage) ? stageMap.get(stage) + 1 : 1);
  });

  for (let stage = 1; stage <= N; stage++) {
    const challenger = stageMap.get(stage) || 0;
    const rate = challenger / (total - retiree);
    failure.push(`${stage} ${rate}`);
    retiree += challenger;
  }

  return failure
    .sort((a, b) => {
      const [aStage, aRate] = a.split(' ');
      const [bStage, bRate] = b.split(' ');
      if (aRate === bRate) return aStage - bStage;
      else return bRate - aRate;
    })
    .map((data) => Number(data.split(' ')[0]));
}
