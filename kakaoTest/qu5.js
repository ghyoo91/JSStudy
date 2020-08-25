//n-1행의 열 index pre
//n행의 pre배제한 최대값을 리턴.
function fx(arr, n, pre){
    var n_max = Math.max.apply(null, arr[n]);
    var current=arr[n].indexOf(n_max);

    console.log("ddd"+n_max+current);

    if(current != pre){
        return [n_max, current];
    }
    else{
        n_max=0; current=0;
        for(var i=0;i<4;i++){
            if(i===pre)continue;
            else{
                if(n_max < arr[n][i]){
                    n_max = arr[n][i];
                    current = i;
                }
            }
        }
        return [n_max, current];
    }
}

function solution(land) {
    var answer = 0;
    var arr = new Array(land.length);

    for(var j=0;j<arr.length;j++){
        arr[j] = new Array(2);
    }

    arr[0][0] = Math.max.apply(null, land[0]);
    arr[0][1] = land[0].indexOf(arr[0][0]);
    console.log(arr[0]);

    for(var i=1;i<land.length;i++){
        arr[i] = fx(land, i, arr[i-1][1]);
    }

    for(var k=0;k<arr.length;k++){
        answer = answer+arr[k][0];
        console.log(arr[k]);
    }

    return answer;
}

(function(){
    var board = [[1,2,3,5],[5,6,7,8],[4,3,2,1]];
    console.log(solution(board));
})();
