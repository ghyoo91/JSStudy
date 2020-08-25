function solution(board) {
    var max = 0;

    for(var i=0;i<board.length;i++){
        //첫번째 입력값과 동일한 길이가 입력된다 가정. 즉 board는 반드시 직사각형
        if(i+max < board.length){
            for(var j=0;j+max<board[0].length;j++){
                if(board[i][j] === 1 && (j+max) < board[0].length){
                    var Rec = true;
                    while(Rec){
                        max++;
                        Rec = isRec(board,i,j,max);
                    }
                }
            }
        }
    }
    return max*max;
}

function isRec(arr,i,j,side) {
    var temp=true;
    for(var k=1;k<side;k++){
        if(!(arr[i+k][j] && arr[i][j+k])){
            temp = false;
        }
        else{
            temp = temp && (arr[i+k][j] === 1) && (arr[i][j+k] === 1);
        }
    }
    return temp;
}

(function(){
    var board = [[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]];
    console.log(solution(board));
})();
