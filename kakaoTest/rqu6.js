function solution(m, n, board) {
  var answer = 0;
  var runflag = false;
  var arr = new Array(m);
  var arr2 = new Array(m);

  for(var q=0;q<m;q++){
    arr[q] = new Array(n);
    arr2[q] = new Array(n);
    for(var r=0;r<n;r++){
      arr[q][r] = board[q][r];
      arr2[q][r] = 1;
    }
  }

  do{
    //터트릴게 있나?
    for(var i=0;i<m-1;i++){
      for(var j=0;j<n-1;j++){
        if(arr[i][j] === arr[i][j] && arr[i][j] === arr[i+1][j] && arr[i][j] === arr[i][j+1] && arr[i][j] === arr[i+1][j+1] && arr[i][j] != -1){
          arr2[i][j] = 0; arr2[i+1][j] = 0;
          arr2[i][j+1] = 0; arr2[i+1][j+1] = 0;
          runflag = true;
        }
        else{
          runflag = false;
        }
      }
    }

    //0숫자 세기
    for(var k=0;k<m;k++){
      for(var l=0;l<n;l++){
        if(arr2[k][l] == 0){
          arr[k][l] = 0;
          answer++;
        }
      }
    }

    console.log(arr);
    //아래로 내리기
    for(var i2=1; i2<m; i2++){
      for(var j2=0; j2<n; j2++){
        if(arr[i2][j2] == 0){
          arr[i2][j2] = arr[i2-1][j2];
          arr[i2-1][j2] = -1;
        }
      }
    }
    console.log("After\n");
    console.log(arr);

    //console.log(arr);
  } while(runflag);

  return answer;
}

(function(){
  var str1 = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"];

  console.log(solution(6, 6, str1));
})();
