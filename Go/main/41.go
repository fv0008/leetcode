/*
给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。

 

示例 1:

输入: [1,2,0]
输出: 3
示例 2:

输入: [3,4,-1,1]
输出: 2
示例 3:

输入: [7,8,9,11,12]
输出: 1
 

提示：

你的算法的时间复杂度应为O(n)，并且只能使用常数级别的额外空间。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/first-missing-positive
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

	通过	0 ms	2.2 MB	Golang
 */
package main

func firstMissingPositive(nums []int) int {
	i:=1
	find:=false
	for find==false {
		find = true
		for index := 0; index < len(nums);index++ {
			v := nums[index]
			if(i>=v){
				if v>0{find=false};
				nums = append(nums[:index], nums[index+1:]...)
				index--
			}
		}
		if find {
			return i
		}
		i++
	}
	return i
}
//func main(){
//	nums := []int{0}
//	_ = firstMissingPositive(nums)
//}
