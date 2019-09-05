function solution(S){
  // 0 is not nested, 1 is nested
  let result = 0; let flag = 0;
  let stack = [];

  for(let i=0;i<S.length;i++){
    if(S[i] === "("){
      stack.push(1);
    } else {
      if(stack.length === 0) {
        flag = 1;
        break;
      }
      stack.pop();
    }
  }

  if (flag === 1){
    return 0;
  } else {
    return (stack.length === 0) ? 1 : 0;
  }
}

(function(){
  let S = "(()(())())";
  let S2 = "())";
  let S3 = ")(";

  console.log(solution(S));
}());
