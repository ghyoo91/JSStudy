//Original Question : https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/

function solution(N, A){
  const lenA = A.length;
  let counter = Array.apply(null, new Array(N)).map(Number.prototype.valueOf, 0);
  let maxCounter = 0;

  for(let i=0;i<lenA;i++){
    //console.log(counter);
    if (A[i] === N+1) {
      for(let j=0;j<counter.length;j++){
        counter[j] = maxCounter;
      }
    } else {
      counter[A[i]-1]++;
      if (counter[A[i]-1] > maxCounter) {
        maxCounter = counter[A[i]-1];
      }
    }
  }

  return counter;
}

(function(){
  let A = [3, 4, 4, 6, 1, 4, 4];
  let N = 5;

  console.log(solution(N, A));
}());
