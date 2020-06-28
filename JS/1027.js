/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    var s = new Array()
    arr.forEach((el,index)=>{
        el = el + 1000
        s[el] = s[el]==undefined?1: s[el]+1
    })
    var r = true
    s.sort((a, b) => {if(a==b && a!=0){return r = false} return a - b})
    return r
};

r = uniqueOccurrences( [-3,0,1,-3,1,1,1,-3,10,0])
console.log(r)