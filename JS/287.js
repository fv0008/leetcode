/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var f = 0
    nums.forEach((v,i)=>{
        for(t=i+1;t<nums.length && 0==f;t++)
        {
            if(v==nums[t] && f==0)
            {
                f = v
            }
        }
    })
    return f
};

findDuplicate( [3,1,3,4,2])