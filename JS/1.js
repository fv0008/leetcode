/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //nums.sort((a,b)=>{return a<b})
    for (let index = 0; index < nums.length; index++) {
        find = target-nums[index]
        f=nums.indexOf(find)
        if(-1!=f && index!=f)
        {
            return [index,f]
        }    
    }
    return [0,0]
};

r = twoSum([3,2,4],6)
console.log(r)