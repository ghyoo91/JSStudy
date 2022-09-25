/**
 * this is the detail of the customReduce.
 * todo, deprecated 도 있음.
 * @param {string} a 이건 aaaa
 * @param {string} b 이건 bbbb
 * @returns {string} 이건 A+B
 */
function customReduce(a, b) {
    return a + b;
}

const a = [{id: 1, val: "eee"}];
const b = [];
const c = [{id: 1, val: "ddd"}, {id: 2, val: "kkk"}];
const d = [{id: 1, val: "ddd"}, {id: 2, val: "kkk"}, {id: 3, val: "zzz"}, {id: 4, val: "qie"}];
const e = customReduce(a, b);
const func = (val) => val.reduce((pre, cur) => (pre.id > cur.id ? pre : cur));

console.log(func(a).id);
// console.log(func(b));
console.log(func(c).id);
console.log(func(d).id);
