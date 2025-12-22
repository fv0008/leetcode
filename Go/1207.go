package main

import (
	_ "fmt"
	"sort"
);

func uniqueOccurrences(arr []int) bool {
	s:=make([]int,2000)
	for _,v := range arr {
		v = v + 1000
		if(0==s[v]){
			s[v] = 1
		} else {
			s[v] = s[v]+1
		}
	}
	sort.Ints(s)
	for i:=0;i<len(s)-1;i++ {
		if s[i] ==s[i+1] && s[i]!=0 {
			return false
		}
	}
	return true
}
func main(){
	arr :=[]int{26,2,16,16,5,5,26,2,5,20,20,5,2,20,2,2,20,2,16,20,16,17,16,2,16,20,26,16}
	uniqueOccurrences(arr)
}