//Original Question : https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/

function solution(A){
  let result = 0;
  let aa = [];
  let cnt = 0;
  let j=1;
  aa[0] = 0;

  for(let i=A.length-1; i>-1; i--){
    if(A[i] === 1){
      cnt++;
    } else {
      aa[j] = aa[j-1] + cnt;
      j++;
      cnt = 0;
    }
  }

  for(let i=0;i<aa.length;i++){
    result += aa[i];
    if(result > 1000000000){
      return -1;
    }
  }

  return result;
}

(function(){
  let A = [0,1,0,1,1];

  console.log(solution(A));
}());
