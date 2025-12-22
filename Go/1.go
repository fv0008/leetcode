package main

func twoSum(nums []int, target int) []int {
	m:=[]int{}
	s :=len(nums)
	for index:=0;index<s;index++ {
		f := target - nums[index]
		for i,v := range nums{
			if f==v && i!=index {
				m = append(m, index,i)
				return m
			}
		}
	}
	return m
}
//func main(){
//	nums := []int{3,2,4}
//	target :=6
//	twoSum(nums,target)
//}