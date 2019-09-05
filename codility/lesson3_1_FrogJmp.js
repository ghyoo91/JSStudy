function solution(x, y, d){
  let result = ((y-x)%d === 0) ? Math.floor((y-x)/d) : Math.floor((y-x)/d)+1;
  return result;
}

(function(){
  let x = 10; let y = 85; let d = 30;

  console.log(solution(x, y, d));
}());
