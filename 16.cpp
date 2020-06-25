#include <iostream>
#include <map>
#include <vector>
using namespace std;
/*
16.给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

示例：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum-closest
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

通过	748 ms	10.2 MB	Cpp
*/
class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        map<int,int> ky;
        int min = nums[0]+nums[1]+nums[2];
        sort(nums.begin(),nums.end());
        for(auto i=0;i<nums.size();i++)
        {
            for(auto x=i+1;x<nums.size();x++)
            {
                for(auto y=0;y<nums.size();y++)
                {
                    if(i!=x && x!=y && i!=y)
                    {
                        int v = nums[i]+nums[x]+nums[y];
                        int k = abs(v-target);
                        if(k < abs(min-target))
                        {
                            min = v;
                        }
                        else if(k < abs(min-target) && min>target )
                        {
                            min = v;
                            continue;
                        }
                        if(0==k)
                        {
                            return min;
                        }
                    }
                }
            }
        }
        return min;
    }
};
//int main() {
//    Solution S;
//    vector<int> nums={87,6,-100,-19,10,-8,-58,56,14,-1,-42,-45,-17,10,20,-4,13,-17,0,11,-44,65,74,-48,30,-91,13,-53,76,-69,-19,-69,16,78,-56,27,41,67,-79,-2,30,-13,-60,39,95,64,-12,45,-52,45,-44,73,97,100,-19,-16,-26,58,-61,53,70,1,-83,11,-35,-7,61,30,17,98,29,52,75,-73,-73,-23,-75,91,3,-57,91,50,42,74,-7,62,17,-91,55,94,-21,-36,73,19,-61,-82,73,1,-10,-40,11,54,-81,20,40,-29,96,89,57,10,-16,-34,-56,69,76,49,76,82,80,58,-47,12,17,77,-75,-24,11,-45,60,65,55,-89,49,-19,4};
//
//    S.threeSumClosest(nums,-275);
//    return 0;
//}
