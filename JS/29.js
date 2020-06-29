/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 * 
104 ms
, 在所有 JavaScript 提交中击败了
35.15%
的用户
 */
var divide = function(dividend, divisor) {
    const max = Math.pow(2,31)-1
    abs = dividend < 0
    abs = abs ^ (divisor < 0)
    dividend= Math.abs(dividend)
    divisor= Math.abs(divisor)
    //建立一个减法快除表
    sub = new Array()
    p = 0
    sub[p] = divisor
    do{
        r = sub[sub.length-1] + sub[sub.length-1]
        sub[++p] = r
    }
    while(r<max && r<dividend)
    //用快除表去除，然后记录总数
    i = 0
    while(dividend>=divisor)
    {
        for(p=sub.length+1;p>=0;)
        {
            if(dividend>=sub[p])
            {
                dividend = dividend - sub[p]
                i = i+Math.pow(2,p)
            }
            else{
                p--
            }
        }
    }
    if(abs)
    {
        i = 0-i
    }
    if(i>max)
    {i=max}
    return i
};

divide(-2147483648,1)