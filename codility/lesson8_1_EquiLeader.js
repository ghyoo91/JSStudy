function findLeader(arr) {
  let len = arr.length;
  let stackSize = 0;
  let value = 0;
  let candidate = -1;
  let leader = -1;
  let count = 0;

  for(let i=0;i<len;i++) {
    if (stackSize === 0) {
      stackSize++;
      value = arr[i];
    } else {
      if (value != arr[i]) {
        stackSize--;
      } else {
        stackSize++;
      }
    }
  }

  if (stackSize > 0) {
    candidate = value;
  }

  for(let i=0;i<len;i++) {
    if (arr[i] === candidate) {
      count++;
    }
  }

  if (count > Math.floor(len/2)) {
    leader = candidate;
  }

  return leader;
}

function solution(A) {
  let result = 0;
  let value = []; let count = {};

  /* O(n^2) solution
  for(let i=0;i<A.length-1;i++) {
    let left = findLeader(A.slice(0, i+1));
    let right = findLeader(A.slice(i+1));

    if ((left === right) && left != -1) {
      result++;
    }
  }*/

  // O(n) solution
  for(let i=0;i<A.length;i++) {
    if (value.indexOf(A[i]) === -1) {
      value.push(A[i]);
      count[A[i]] = 1;
    } else {
      count[A[i]]++;
    }
  }

  let candidate = Math.max.apply(null, value);
  let candidate_count = count[candidate];

  // no leader
  if (candidate_count <= A.length/2) {
    return 0;
  }

  let left_count = 0;
  for(let i=0;i<A.length-1;i++) {
    if (A[i] === candidate) {
      left_count++;
    }

    if (left_count > (i+1)/2) {
      let right_count = candidate_count - left_count;

      if(right_count > (A.length-i-1)/2){
        result++;
      }
    }
  }
  return result;
}

(function() {
  // result 2
  let A = [4,3,4,4,4,2];
  // result 0
  let A1 = [4,6,6,6,6,8,8];
  // result 1
  let A2 = [0,0];
  // result 0
  let A3 = [1,2,3,4,5];
  // result 3
  let A4 = [4,4,2,5,3,4,4,4];

  console.log(solution(A4));
}());
