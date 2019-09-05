//Original Question : https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/

function solution(A, B, K){
  let b = Math.floor((B/K));
  let a = 0;

  if(A>0){
    a = Math.floor((A-1)/K);
  } else if(A == 0){
    b++;
  }

  return b-a;
}

(function(){
  console.log(solution(1, 1, 11));
}());
