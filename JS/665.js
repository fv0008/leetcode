/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 
 * 给你一个长度为 n 的整数数组，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。

我们是这样定义一个非递减数列的： 对于数组中所有的 i (0 <= i <= n-2)，总满足 nums[i] <= nums[i + 1]。

 

示例 1:

输入: nums = [4,2,3]
输出: true
解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。
示例 2:

输入: nums = [4,2,1]
输出: false
解释: 你不能在只改变一个元素的情况下将其变为非递减数列。
 

说明：

1 <= n <= 10 ^ 4
- 10 ^ 5 <= nums[i] <= 10 ^ 5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/non-decreasing-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
通过	76 ms	38.3 MB	Javascript
 */
var checkPossibility = function(nums) {
    var size = nums.length
    if(size<1) return false
    if(size==2) return true
    var count = 0
    for(var i=0;i<size-1;i++){
        if(!(nums[i] <= nums[i + 1]))
        {
            if(0==i) //自己向后同步
            {
                nums[i] = nums[i+1]
            }
            else if(i>0 && (nums[i] > nums[i-1]) && (nums[i-1] <= nums[i+1])){ //自己向前同步，再探索一次
                nums[i] = nums[i-1]
                i--
            }
            else if(i>0 && (nums[i] >= nums[i+1])){//只能后向自己同步
                nums[i+1] = nums[i] //解决
            }
            else{
                return false //解决不了
            }
            count++
        }
        if(count>=2){
            return false
        }
    }
    return count<2
};
r = checkPossibility([1,2,4,5,3])
r = checkPossibility([2,3,3,2,4])
r = checkPossibility([3,4,2,3])
r = checkPossibility([3,3,2,2])
r = checkPossibility([4,2,3])
r = checkPossibility([4,2,1])

console.log(r)