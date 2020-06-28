package main

import  "sort"

func findKthLargest(nums []int, k int) int {
	sort.Sort(sort.Reverse(sort.IntSlice(nums)))
	for i,v := range nums{
		if(i+1==k) {
			return v
		}
	}
	return 0
}
func main()  {
	nums := []int{3,2,3,1,2,4,5,5,6}
	k :=4
	findKthLargest(nums,k)
}