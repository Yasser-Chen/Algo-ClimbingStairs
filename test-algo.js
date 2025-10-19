/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let solved = {
        "-2": 0, // skip
        "-1": 1, // skip
        0: 1,
    }, sum = 0;
    for (let a = 0; a < n; a++) {
        sum = solved[a - 1] + solved[a - 2];
        solved[a] = sum;
    }
    return sum;
};

console.log(climbStairs(5)); //8

// 5 : 221 122 212 1112 1211 1121 2111 11111
// 4 : 22  112 121 211 1111
// 3 : 21 12 111
// 2 : 11 2
// 1 : 1
