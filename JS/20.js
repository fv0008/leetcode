/**
 * @param {string} s
 * @return {boolean}
 */
//这应该是偷懒了 利用正则表达式，关联的还有32题，应该重新做
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