/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var tsize = 0
    var size = s.length
    while(tsize!=size)
    {
        size = tsize
        s = s.replace(/\(\)|\[\]|\{\}/g,"");
        tsize = s.length
    } 
    return s.length==0
};
isValid("()[]()")