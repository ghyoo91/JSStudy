function solution(A){
    let result = 0;
    let arr = new Array(Math.max.apply(null, A)).fill(0);

    for(let i=0;i<A.length;i++){
        arr[A[i]]++;
    }

    if(result === 0){
        result = 1;
    }

    return result;
}

(function(){
    let A = [1,3,6,4,1,2];
    console.log(solution(A));
}());
