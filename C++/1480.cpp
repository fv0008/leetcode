/*
 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。

请返回 nums 的动态和。

 

示例 1：

输入：nums = [1,2,3,4]
输出：[1,3,6,10]
解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。
示例 2：

输入：nums = [1,1,1,1,1]
输出：[1,2,3,4,5]
解释：动态和计算过程为 [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1] 。
示例 3：

输入：nums = [3,1,2,10,1]
输出：[3,4,6,16,17]
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/running-sum-of-1d-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 通过	4 ms	8.5 MB	Cpp
 */
#include <vector>
#include <string>
#include <string.h>
#include <stdio.h>
#include <iostream>
#include <algorithm>
using namespace std;
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        int current = 0 ;
        vector<int> addlist;
        for(vector<int>::iterator it=nums.begin();it!=nums.end();it++)
        {
            current = current + *it;
            addlist.push_back(current);
        }
        return addlist;
    }
};
//int main()
//{
//    Solution S;
//    vector<int> nums = {1,1,1,1,1};
//    auto r = S.runningSum(nums);
//    //std::cout<<r<<endl;
//}