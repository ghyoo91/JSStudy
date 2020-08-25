function solution(A, B){
    // 0 is up, 1 is down
    let stack = [];
    let result = 0;

    for(let i=0;i<B.length;i++) {
        if(B[i]===1){
            stack.push(i);
            result++;
        } else {
            result++;
            while(stack.length > 0){
                result--;
                if(A[stack[stack.length-1]] < A[i]){
                    stack.pop();
                } else {
                    break;
                }
            }
        }
    }

    return result;
}

(function(){
    // answer is 2
    const A = [4,3,2,1,5];
    const B = [0,1,0,0,0];

    // answer is 4
    const B_ = [1,0,1,1,1];

    // answer is 4
    const A2 = [1,2,3,4,5,6,7,8];
    const B2 = [0,1,0,0,1,1,0,1];

    console.log(solution(A2, B2));
}());
