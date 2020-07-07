/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
    var t = new Array()
    if(k<=0){return []}
    for(var s = 0;s<=k;s++)
    {
        for(var l=k-s;l<=k;k++)
        {
            count = shorter*s + l*longer
            t.push(count)
        }
    }
    t.sort((a,b)=>{return a-b})
    return t
};
divingBoard(1,2,3)