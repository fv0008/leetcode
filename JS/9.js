/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0)
    {
        return false
    }
    x = x.toString()
    var t = x.split("")
    t.reverse()
    var xx = t.join("")
    if (-1!=xx.indexOf(x) && xx.length == x.length){
        return true
    }
    return false
};
isPalindrome(10)