/*
Array
1. Find the second minimum element of an array
2. First non-repeating integers in an array
3. Merge two sorted arrays
4. Rearrange positive and negative values in an array
with
- insert, get, delete, size
*/

function solution1(arr) {
    // tmp = [2nd minimum, 1st]
    let tmp = [11, 11];

    arr.forEach((value) => {
        if (value < tmp[0]) {
            if (value < tmp[1]) {
                tmp[0] = tmp[1];
                tmp[1] = value;
            } else {
                tmp[0] = value;
            }
        }
    });

    return tmp[0];
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution1(arr));
