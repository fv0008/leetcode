/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}

var divingBoard = function(shorter, longer, k) {
    var t = new Array()
    if(k<=0){return []}
    for(var s = 0;s<=k;s++)
    {
        for(var l=k-s;l<=k-s;l++)
        {
            var count = shorter*s + l*longer
            if(-1==t.indexOf(count))
            {
                t.push(count)
            }
        }
    }
    // var resultArr = t.filter(function (item, index, self) {
    //     //indexOf返回的是arr中的第一个元素的索引值,所以下面语句过滤掉了arr中重复的元素.
    //     return self.indexOf(item) == index;
    
    // });
    t.sort((a,b)=>{return a-b})
    return t
};
 */
var divingBoard = function(shorter, longer, k) {
    if(k<=0){return []}
    if(shorter===longer){
        return [shorter*k]
    }
    var t = new Array()
    for(var l = 0;l<=k;l++)
    {
        var count = shorter*(k-l) + l*longer
        t.push(count)
        
    }
    return t
};
divingBoard(1,1,5)