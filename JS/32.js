var longestValidParentheses = function(s) {
    var tsize = 0
    var size = s.length
    while(tsize!=size)
    {
        size = tsize
        var ll = s.match(/\([\s]*\)/)
        var str = ""
        for (var i = 0; ll!=null && i < ll[0].length-1; i++) {
            str += " ";
        }
        s = s.replace(/\([\s]*\)/,str);
        tsize = s.length
    } 
    //return s.length==0
    var max = 0
    var lll = 0
    var rrr = lll
    while (lll<s.length-rrr)
    {
        for(rrr = 0;lll+rrr<s.length;)
        {
            if(" "==s[lll+rrr])
            {
                max = max>(rrr+1)?max:(rrr+1)
                rrr++
            }
            else
            {
                lll = lll+rrr+1
                break
            }
        }
    }
    return max*2

}
var s = "()1((()))2(((())))"
longestValidParentheses(s)
