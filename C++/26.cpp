//
// Created by fxl on 2020/7/8.
//
#include <vector>
using namespace std;
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if(nums.size()<=0) return 0;
        int i = 0;
        for(auto k = 0 ; k<nums.size();k++){
            if(nums[i]!=nums[k])
            {
                i++ ;
                nums[i] = nums[k]  ;
            }
        }
        return i+1;
    }
};

int main()
{
    vector<int> x = {1,1,2,2,4};
    Solution S;
    S.removeDuplicates(x);
}