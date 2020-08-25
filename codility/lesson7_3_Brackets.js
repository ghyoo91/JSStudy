function solution(S){
    // 0 is not nested, 1 is nested
    let result = 0;
    // ( 1, { 2, [ 3
    let stack = [];

    for(let i=0;i<S.length;i++){
        switch (S[i]) {
        case "(":
            stack.push(1);
            break;
        case "{":
            stack.push(2);
            break;
        case "[":
            stack.push(3);
            break;
        case ")":
            if(stack.indexOf(1) === -1){
                return 0;
            } else {
                if(stack[stack.length-1] !== 1){
                    return 0;
                } else {
                    stack.pop();
                }
            }
            break;
        case "}":
            if(stack.indexOf(2) === -1){
                return 0;
            } else {
                if(stack[stack.length-1] !== 2){
                    return 0;
                } else {
                    stack.pop();
                }
            }
            break;
        case "]":
            if(stack.indexOf(3) === -1){
                return 0;
            } else {
                if(stack[stack.length-1] !== 3){
                    return 0;
                } else {
                    stack.pop();
                }
            }
            break;
        }
    }

    return (stack.length === 0) ? 1 : 0;
}

(function(){
    // answer 1
    const S = "{[()()]}";
    // answer 0
    const S2 = "([)()]";

    console.log(solution(S2));
}());
