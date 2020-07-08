/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var abs = false
    if(x<0) {x = -x;abs = true}
    x = x.toString()
    t = x.split("")
    t = t.reverse();
    x = t.join("")
    x = Number(x)
    if(x>Math.pow(2,31)-1)
    {
        return 0
    }
    if(abs)
    {
        x = 0-x
    }
    return x
};