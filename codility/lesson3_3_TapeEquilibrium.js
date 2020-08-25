function solution(A){
    let arr = [];
    let total = 0;
    let result = 10000;
    let tmp = 0;
    arr[0] = A[0];

    for(let i=1;i<A.length;i++){
        arr[i] = arr[i-1] + A[i];
    }

    total = arr[A.length-1];

    for(let i=0;i<A.length-1;i++){
        tmp = Math.abs((total - arr[i]) - arr[i]);

        if(tmp < result){
            result = tmp;
        }
    }

    return result;
}

(function(){
    //let A = [-1000, 1000];
    let A = [3,1,2,4,3];

    console.log(solution(A));
}());
