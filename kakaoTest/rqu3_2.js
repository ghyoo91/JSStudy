function solution(cacheSize, cities) {
  var hit = 0;
  var miss = 0;
  var tmp_index=0;
  var cache = new Array(cacheSize);
  var cache_life = new Array(cacheSize);

  for(var j=0; j<cache_life.length;j++){
    cache[j] = "";
    cache_life[j] = 0;
  }

  for(var i in cities){
    cities[i] = cities[i].toLowerCase();
    if(cache.indexOf(cities[i]) != -1){
      hit++;
    }
    else{
      miss++;
      tmp_index = cache_life.indexOf(Math.min.apply(null, cache_life));
      cache[tmp_index] = cities[i];
      cache_life[tmp_index] = cacheSize;

      for(var k=0;k<cache_life.length;k++){
        if(cache_life[k] === 0){
          continue;
        }
        else{
          cache_life[k]--;
        }
      }

    }
    console.log("cache ---" + cache);
    console.log("cache_life ---" + cache_life);
  }
  return hit*1+miss*5;
}

(function(){
  var str1 =  ["Jeju", "Pangyo", "Seoul", "NewYork"];
  var str2 = 	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"];

  console.log(solution(3, str2));
})();
