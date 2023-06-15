function solution(wallpaper) {
  let [lux, luy] = [50, 50];
  let [rdx, rdy] = [0, 0];

  wallpaper.forEach((row, xpos) => {
    [...row].forEach((data, ypos) => {
      if (data === '#') {
        if (lux > xpos) lux = xpos;
        if (luy > ypos) luy = ypos;
        if (rdx <= xpos) rdx = xpos + 1;
        if (rdy <= ypos) rdy = ypos + 1;
      }
    });
  });

  return [lux, luy, rdx, rdy];
}
