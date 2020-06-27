/*
求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

 

示例 1：

输入: n = 3
输出: 6
示例 2：

输入: n = 9
输出: 45

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/qiu-12n-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


脑残题目
就是要利用&&的问题
go这里还需要运用隐私函数强制做一个运算加合然后去显示转换bool

	通过	0 ms	2.6 MB	Golang
	通过	0 ms	6.1 MB	Cpp
    数据上应该比C++快
*/

func sumNums(n int) int {
        _ = n > 0 && func() bool { n += sumNums(n - 1); return true }()
        return n;
}