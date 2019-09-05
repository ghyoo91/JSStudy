function solution(dartResult) {
  var answer = 0;
  var arr = [0,0,0];
  var index = (-1);

  for(var j=0;j<dartResult.length;j++){
    console.log(dartResult[j]);
    switch (dartResult[j]) {
    case "S":
      break;
    case "D": arr[index] = arr[index] * arr[index];
      break;
    case "T": arr[index] = arr[index] * arr[index] * arr[index];
      break;
    case "*": arr[index] = arr[index]*2;
      if(index != 0){
        arr[index-1] = arr[index-1]*2;
      }
      break;
    case "#": arr[index] = arr[index]*(-1);
      break;
    case "1":
      index++;
      if(dartResult[j+1] === "0"){
        arr[index] = 10;
        j++;
      }
      else{
        arr[index] = 1;
      }
      break;
    default : index++;
      arr[index] = dartResult[j]*1;
      break;
    }
    console.log(arr +"//"+ index);
  }

  for(var i=0;i<3;i++){
    answer = answer+arr[i];
  }

  return answer;
}

(function(){
  var board = "1S2D*3T";
  console.log(solution(board));
})();
