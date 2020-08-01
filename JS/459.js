/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {

    var t =s+s
    t = t.slice(1,t.length)
    var pindex = t.indexOf(s)
    if(pindex==s.length-1)
    {
        return false
    }
    return true
};