function makeGroup(inputStr){
  var arr = [];

  for(var i=0;i<inputStr.length-1;i++){
    if((inputStr[i].match(/[a-z]/gi) != null) && (inputStr[i+1].match(/[a-z]/gi) != null)){
      arr.push((inputStr[i] + inputStr[i+1]).toUpperCase());
    }
  }
  return arr;
}

function fx_union(arr1, arr2){
  var tmp = {};
  var res = [];
  var check = {};

  for(var i=0;i<arr1.length;i++){
    if(tmp[arr1[i]]){
      tmp[arr1[i]]++;
    }
    else{
      tmp[arr1[i]] = 1;
    }
  }
  for(var j=0;j<arr2.length;j++){
    if(tmp[arr2[j]]){
      if(!check[arr2[j]]){
        check[arr2[j]] = 1;
      }
      else if(check[arr2[j]] >= tmp[arr2[j]]){
        check[arr2[j]]++;
        tmp[arr2[j]] = check[arr2[j]];
      }
      else{
        check[arr2[j]]++;
      }
    }
    else{
      tmp[arr2[j]] = 1;
    }
  }
  for(var k in tmp){
    for(var p=0;p<tmp[k];p++){
      res.push(k);
    }
  }
  return res;
}

function fx_inter(arr1, arr2){
  var tmp = {};
  var res = [];
  var check = {};

  for(var i=0;i<arr1.length;i++){
    if(tmp[arr1[i]]){
      tmp[arr1[i]]++;
    }
    else{
      tmp[arr1[i]] = 1;
    }
  }
  for(var j=0;j<arr2.length;j++){
    if(tmp[arr2[j]]){
      if(!check[arr2[j]]){
        check[arr2[j]] = 1;
      }
      else if(check[arr2[j]] <= tmp[arr2[j]]){
        check[arr2[j]]++;
        tmp[arr2[j]] = check[arr2[j]];
      }
      else{
        check[arr2[j]]++;
      }
    }
    else{
      tmp[arr2[j]] = 1;
    }
  }
  for(var k in tmp){
    for(var p=0;p<tmp[k];p++){
      res.push(k);
    }
  }
  return res;
}

function solution(str1, str2) {
  var answer = 0;
  var str1_arr = [];
  var str2_arr = [];
  var inter = [];
  var union = [];

  str1_arr = makeGroup(str1);
  str2_arr = makeGroup(str2);
  union = fx_union(str1_arr, str2_arr);
  inter = fx_inter(str1_arr, str2_arr);

  console.log(union);
  console.log(inter);

  if(union.length === 0){
    answer = 65536;
  }
  else{
    answer = Math.floor((inter.length/union.length)*65536);
  }
  return answer;
}

(function(){
  var str1 = "FRANCE";
  var str2 = "french";

  console.log(solution(str1,str2));
})();
