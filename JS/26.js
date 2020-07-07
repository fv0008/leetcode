/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    var t = nums.filter(function(num,index,self){
        return self.indexOf(num) == index
    })
    for(var i=0;i<t.length;i++)
    {
        nums[i] = t[i]
    }
    return t.length

};
nums = [0,0,1,1,1,2,2,3,3,4]
var r = removeDuplicates(nums)