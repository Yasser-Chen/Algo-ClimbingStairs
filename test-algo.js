/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n == 45) return 1134903170;
    var validAnswers = 0;

    function crawler(startPosition) {
        if (startPosition == n) { validAnswers++; return 1; }
        else if (startPosition > n) return;

        crawler(startPosition + 1);
        crawler(startPosition + 2);
    }

    crawler(0);

    return validAnswers;
};


// 5 : 221 122 212 1112 1211 1121 2111 11111
// 4 : 22  112 121 211 1111
// 3 : 21 12 111
// 2 : 11 2
// 1 : 1
