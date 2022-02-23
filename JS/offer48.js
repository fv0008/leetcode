var lengthOfLongestSubstring = function(s) {
    var map = new Array()
    var l =  -1
    var res = 0
    for(var i= 0 ;i<s.length;i++)
    {
        if(undefined!=map[s[i]]){
            l = Math.max(l,map[s[i]])
        }
        map[s[i]] = i
        res = Math.max(res,i-l)
    }
    return res
};

lengthOfLongestSubstring("bbbbb")