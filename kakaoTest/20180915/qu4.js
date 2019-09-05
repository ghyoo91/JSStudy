function solution(food_times, k) {
  let cnt = 0; let nxt = 0;
  let len = food_times.length;
  let notzeroidx = [];

  food_times.forEach((item, idx) => {
    if (item !== 0) {
      notzeroidx.push(idx);
    }
  });

  while(cnt < k) {
    if(notzeroidx.length === 0){
      nxt = -2;
      break;
    }

    if(food_times[nxt] === 0) {
      let tmp = notzeroidx.indexOf(nxt)+1;
      if(tmp >= notzeroidx.length){
        tmp = 0;
      }
      nxt = notzeroidx[tmp];
      notzeroidx.splice(tmp-1, 1);
    } else {
      food_times[nxt]--;
      cnt++;
      let tmp = notzeroidx.indexOf(nxt)+1;
      if(tmp >= notzeroidx.length){
        tmp = 0;
      }
      nxt = notzeroidx[tmp];
    }
  }

  while(food_times[nxt] === 0) {
    if(Math.max(...food_times) === 0){
      nxt = -2;
      break;
    }

    let tmp = notzeroidx.indexOf(nxt)+1;
    if(tmp >= notzeroidx.length){
      tmp = 0;
    }
    nxt = notzeroidx[tmp];
  }

  return nxt+1;
}

(function(){
  //let food_times = [1,0,0,0,0,0,0,1];
  let food_times = [3,1,2];
  let k=5;

  console.log(solution(food_times, k));
})();
