var longestValidParentheses = function(s) {
    var size = 0
    var t = s
    do{
        size =  t.length
         t =  t.replace("()","|")
    }while( t.length<size)
    var c = new Array()
    while(size>0)
    {
        c.push("|")
        size--
    }
    c = c.toString()
    c.replace(/,/g,'');
    if(-1!=s.indexOf(c))
    {
        return c.length
    }
    return 0

};
longestValidParentheses("(()")