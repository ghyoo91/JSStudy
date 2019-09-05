(function(){
	var a = [1,2,3,4,5];

	var b = a.forEach( function(v, i){
		console.log(v);
		return v+1;
	});

	var c = a.map( function(v, i){
		console.log(v);
		return v+1;
	});

	console.log("b : "+b);
	console.log("c : "+c);

})();

/* reduce기본 형태 : add(0,1)에서 계속해서 함수 중첩되는 형태
function add(acc, value) {
  return acc + value;
}
[1, 2, 3, 4, 5].reduce(add, 0);
*/

//reduce로 map과 filter구현
//filter -> 배열을 돌면서 각 원소에 대해 callback처리하고 결과값 참인애들만 리턴
function myfilter(arr, predicate) {
	return arr.reduce(function (xs, x) {
		if (predicate(x))
			xs.push(x);
		return xs;
	}, []);
}

//map -> 배열을 돌면서 각 원소에 대해 callback처리하고 결과값의 참, 거짓 여부에 상관없이 리턴
function mymap(arr, f) {
	return arr.reduce(function (xs, x) {
		xs.push(f(x));
		return xs;
	}, []);
}
