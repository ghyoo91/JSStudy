//https://medium.com/dailyjs/parseint-mystery-7c4368ef7b21

// 1st : The original map function
// Result : [3, 6, 9, 12, 15]
const result = [1, 2, 3, 4, 5].map((x) => (x*3));

console.log(result);

// Problem : This map function doesn't works what I expected.
/* Result :
1 0 [ 1, 2, 3, 4, 5 ]
2 1 [ 1, 2, 3, 4, 5 ]
3 2 [ 1, 2, 3, 4, 5 ]
4 3 [ 1, 2, 3, 4, 5 ]
5 4 [ 1, 2, 3, 4, 5 ]

Expected :
1
2
3
4
5
*/
const result2 = [1, 2, 3, 4, 5].map(console.log);
// The result2 is equivalent to
const result2_1 = [1, 2, 3, 4, 5].map((val, index, array) => (console.log(val, index, array)));

// The Final Question
// Result = [1, NaN, 3]
const result_fin = ["1", "7", "11"].map(parseInt);
// This one is equivalent to
const result_fin_1 = ["1", "7", "11"].map((val, index, array) => (parseInt(val, index, array)));
console.log(result_fin);
console.log(result_fin_1);

// Info : parseInt's arguments are only two : (number, radix)
// So result_fin's first iteration is like below:
// val = "1", index = 0, array = ["1", "7", "11"]
// The 3rd argument, array is ignored.
// parseInt("1", 0) is 1 (radix is 10 - default)
// parseInt("7", 1) is NaN (radix is 1)
// parseInt("11", 2) is 3 (radix is 2)

// The answer for the final question
const result_fin_Answer = ["1", "7", "11"].map(num => parseInt(num));
console.log(result_fin_Answer);
