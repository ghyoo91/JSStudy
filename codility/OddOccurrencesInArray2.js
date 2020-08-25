//Original Question : https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
function solution(A){
    const lenA = A.length;
    let unpaired = new Set();

    for(let i=0;i<lenA;i++){
        console.log(unpaired);
        if(!unpaired.has(A[i])){
            unpaired.add(A[i]);
        }
        else{
            unpaired.delete(A[i]);
        }
    }

    return Array.from(unpaired)[0];
}

(function(){
    let A = [9, 3, 9, 3, 9, 7, 9];

    console.log(solution(A));
}());
