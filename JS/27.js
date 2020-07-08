/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var i = nums.length-1;
    while(i>=0)
    {
        if(val == nums[i])
        {
            nums.splice(i,1)
        }
        i--;
        
    }
    return nums.length

};

removeElement([3,2,2,3],3)