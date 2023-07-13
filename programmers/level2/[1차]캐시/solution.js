function solution(cacheSize, cities) {
  let time = 0;
  const cache = [];

  cities.forEach((city) => {
    city = city.toLowerCase();
    if (cache.includes(city)) {
      time += 1;
      cache.splice(cache.indexOf(city), 1);
      cache.unshift(city);
    } else {
      time += 5;
      cache.unshift(city);
      if (cache.length > cacheSize) cache.pop();
    }
  });

  return time;
}
