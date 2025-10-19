/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n == 0) return 1;
    else if (n < 0) return 0;

    return climbStairs(n - 1) + climbStairs(n - 2);
};

console.log(climbStairs(5)); //8


// 5 : 221 122 212 1112 1211 1121 2111 11111
// 4 : 22  112 121 211 1111
// 3 : 21 12 111
// 2 : 11 2
// 1 : 1
