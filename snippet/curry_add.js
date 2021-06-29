const add = (a, b) => (a+b);
const curry = (func, a) => (b) => func(a + b);
const addTen = curry(add, 10);

/*
var add = function(a, b){
  return a+b;
};

var curry = function(func, a){
  return function(b){
    return func(a+b);
  };
};

var addTen = curry(add, 10);
*/

console.log(addTen(5));
