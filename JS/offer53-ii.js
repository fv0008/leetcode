
/**
 * @param {number[]} nums
 * @return {number}
 * 通过	76 ms	36.4 MB	Javascript
 * 二分法查找，否则估计速度不行
 */
var missingNumber = function(nums) {
    var l = nums.length
    if(0==l || nums[0]!=0) {
        return 0
    }
    
    if(nums[l-1]==l-1)
    {
        return l
    }
    s = Math.floor(l/2)
    t = Math.floor(l)
    while(!(nums[s-1]==s-1 && nums[s]==s+1))
    {
        t = Math.floor(t/2)
        if(nums[s]==s)
        {
            s = s + t + ((t==0)?1:0)
            s = s<nums.length?s:(nums.length-1)
        }
        else{
            s = t
        }
    }
    return s
};
missingNumber([0,1,2,3,4,5,6,7,8])