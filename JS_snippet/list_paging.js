function d(n){
	var result = n;
	var tmp;

	while(n > 0){
		tmp = Math.floor(n/10);

		result = result + n-(10*tmp);
		n = tmp;
	}
	return result;
}

(function(){
	var ar10000 = new Array(10000);

	for(var i=1;i<10000;i++){
		ar10000[d(i)] = 1;
	}

	for(var j=1;j<10000;j++){
		if(ar10000[j] != 1){
			console.log(j);
		}
	}
})();
