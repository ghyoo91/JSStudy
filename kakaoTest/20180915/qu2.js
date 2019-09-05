function solution(N, stages) {
  let result = [];
  let enter = [];
  let now = [];
  let fail = [];
  let total = stages.length;
  let max = -1;

  for(let i=0;i<N+1;i++) {
    now[i] = 0;
  }

  stages.forEach((item) => {
    now[item-1]++;
  });

  enter[N] = now[N];
  for(let i=N-1;i>-1;i--) {
    enter[i] = now[i]+enter[i+1];
    fail[i] = (enter[i] != 0) ? now[i]/enter[i] : 0;
  }

  //console.log(enter);
  //console.log(now);
  //console.log(fail);

  max = Math.max(...fail);
  while(max > -1){
    let idx = fail.indexOf(max);
    result.push(idx+1);
    fail[idx] = -1;
    max = Math.max(...fail);
  }

  return result;
}

(function(){
  let N = 4;
  //let stages = [2, 1, 2, 6, 2, 4, 3, 3];
  let stages = [4,4,4,4,4];
  // result
  // [3,4,2,1,5]

  console.log(solution(N, stages));
})();
