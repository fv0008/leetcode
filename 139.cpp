//
// Created by fxl on 2020/6/25.
//

#include <vector>
#include <string>
#include <string.h>
#include <stdio.h>
#include <iostream>
#include <algorithm>
using namespace std;

class Solution {
public:
    bool wordBreak(string s, vector<string>& wordDict) {
        int n = s.size();
        bool dp[n+1];
        memset(dp,0,sizeof(dp));
        dp[0] = true;
        for(int i = 0;i < n; )
        {
            if(dp[i])
            {
                for(const string& w: wordDict)
                    if(i + w.size() <= n && memcmp(&s[i], &w[0], w.size())==0)
                    {
                        dp[i+w.size()] = true;
                    }

            }
            i++;
        }

        return dp[n];
    }
};
int main() {
    Solution S;
    vector<string> wordDict = {"apple","pen"};
    string s = "applepenapple";
    bool r = S.wordBreak(s,wordDict);
    std::cout<<r<<endl;
    return 0;
}
