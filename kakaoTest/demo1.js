function solution(A) {
  let result = true;
  let arr = [];

  A.forEach((item) => {
    arr[item] = 1;
  });

  for(let i=1;i<arr.length;i++){
    if(arr[i] !== 1){
      result = false;
    }
  }

  return result;
}

(function(){
  let A = [4,1,3,2];
  let A2 = [4,1,3];
  let A3 = [1,1,1,1,5,5,1,1,9,1];

  console.log(solution(A3));
  //console.log(1);
})();
