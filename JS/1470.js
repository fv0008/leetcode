/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 * 
 * 给你一个数组 nums ，数组中有 2n 个元素，按 [x1,x2,...,xn,y1,y2,...,yn] 的格式排列。

请你将数组按 [x1,y1,x2,y2,...,xn,yn] 格式重新排列，返回重排后的数组。

 

示例 1：

输入：nums = [2,5,1,3,4,7], n = 3
输出：[2,3,5,4,1,7] 
解释：由于 x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 ，所以答案为 [2,3,5,4,1,7]
示例 2：

输入：nums = [1,2,3,4,4,3,2,1], n = 4
输出：[1,4,2,3,3,2,4,1]
示例 3：

输入：nums = [1,1,2,2], n = 2
输出：[1,2,1,2]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shuffle-the-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/*
通过	84 ms	37.5 MB	Javascript
var shuffle = function(nums, n) {
    var f = nums.splice(0,n)
    var s = nums.splice(0,n)
    var arr = new Array()
    for(var i=0;i<n;i++)
    {
        arr.push(f[i])
        arr.push(s[i])
    }
    return arr
};
通过	92 ms	37.4 MB	Javascript
*/
var shuffle = function(nums, n) {
        var j = n - 1;
        for (var i = n; i < 2 * n; i++) {
            var m = i;
            //从中位数开始，数组的前半断减for循环步长，都向后移动for循环步长位，然后减少一个单位，继续交换
            for (var k = j; k > 0; k--) {
                var temp = nums[m];
                nums[m] = nums[m - 1];
                nums[m - 1] = temp;
                m--;
            }
            j--;
        }
        return nums;
};