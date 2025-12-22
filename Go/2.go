package main
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
import "container/list"
type ListNode struct {
	     Val int
	     Next *ListNode
}
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	add:=0
	r := list.New()
	for ;l1!=nil || l2!=nil || add!=0;  {
		s:=0
		if nil!=l1 {
			s = s+l1.Val
			l1=l1.Next
		}
		if nil!=l2{
			s = s+l2.Val
			l2=l2.Next
		}
		s = s+ add;
		add = 0
		if s>=10{
			s=s-10
			add = 1
		}
		r.PushBack(s)
	}
	o := list.New()
	for ; r.Len()>0;{
		var x ListNode
		x.Val=r.Back().Value.(int)
		r.Remove(r.Back())
		x.Next=nil
		if(nil!=o.Front()){
			a :=o.Front().Value.(ListNode)
			x.Next = &a
		}
		o.PushFront(x)
	}
	rr:= o.Front().Value.(ListNode)
	return &rr
}
//
//func main()  {
//	s:=[...]int{2,4,3}
//	ss:=[...]int{5,6,4}
//	o := list.New()
//	oo := list.New()
//	for i:=len(s)-1; i>=0;i--{
//		var x ListNode
//		x.Val=s[i]
//		x.Next=nil
//		if(nil!=o.Front()){
//			a :=o.Front().Value.(ListNode)
//			x.Next = &a
//		}
//		o.PushFront(x)
//	}
//	for i:=len(ss)-1; i>=0;i--{
//		var x ListNode
//		x.Val=ss[i]
//		x.Next=nil
//		if(nil!=oo.Front()){
//			a :=oo.Front().Value.(ListNode)
//			x.Next = &a
//		}
//		oo.PushFront(x)
//	}
//	i:= o.Front().Value.(ListNode)
//	ii:= oo.Front().Value.(ListNode)
//	addTwoNumbers(&i,&ii)
//}