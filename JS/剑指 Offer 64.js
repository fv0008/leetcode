/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    var t = (n &&sumNums(n-1))
    return n + t
};

r = sumNums(9)
console.log(r)