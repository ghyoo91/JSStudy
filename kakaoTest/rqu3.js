function solution(n, arr1, arr2) {
    var answer = [];
    var arr = new Array(n);
    var slice = "";

    for(var k=0;k<n;k++){
        slice = slice+"0";
    }
    for(var i=0;i<n;i++){
        arr[i] = arr1[i] | arr2[i];
        arr[i] = arr[i].toString(2);
        if(arr[i].length != n){
            arr[i] = slice+arr[i];
            arr[i] = arr[i].slice(5);
        }
        if(arr[i].length != n){
            arr[i] = arr[i]+slice;
            arr[i] = arr[i].slice(n+1);
        }
    }

    for(var j=0;j<n;j++){
        answer[j] = arr[j].replace(/1/gi, "#");
        answer[j] = answer[j].replace(/0/gi, " ");
    }
    return answer;
}

(function(){
    var ar1 = [46, 33, 33 ,22, 31, 50];
    var ar2 =	[27 ,56, 19, 14, 14, 10];

    console.log(solution(6, ar1, ar2));
})();
