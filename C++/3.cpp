class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_set<char> record;
        int n = s.size();

        int inc = -1, ans = 0;

        for(int i=0;i<n;i++)
        {
            if (i!=0){
                record.erase(s[i-i]);
            }
            while(inc+1<n && 0==record.count(s[inc+1])){
                record.insert(s[inc+1]);
                inc++;
            }
            ans = max(ans,inc-i+1);
        }
        return ans;
    }
};