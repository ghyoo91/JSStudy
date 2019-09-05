//Original Question : https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
function solution(A){
  const lenA = A.length;
  let unpaired = [];

  for(let i=0;i<lenA;i++){
    //console.log(unpaired);
    let index = unpaired.indexOf(A[i]);
    if( index === -1 ){
      unpaired.push(A[i]);
    }
    else{
      unpaired.splice(index, 1);
    }
  }

  return unpaired.filter(function(value){
    return value;
  })[0];
}

(function(){
  let A = [9, 3, 9, 3, 9, 7, 9];

  console.log(solution(A));
}());
