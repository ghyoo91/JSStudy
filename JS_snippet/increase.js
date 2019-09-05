const increase = value => value + 1;
const apply = (fx, value) => fx(value);

console.log(apply(increase, 9)); // 10
