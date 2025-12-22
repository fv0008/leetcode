class Solution {
public:
    string convert(string s, int numRows) {
        // 特殊情况处理
        if (numRows == 1 || numRows >= s.length()) {
            return s;
        }
        
        // 创建每行的字符串
        vector<string> rows(numRows);
        int curRow = 0;
        int direction = 1;  // 1 表示向下，-1 表示向上
        
        for (char c : s) {
            rows[curRow] += c;
            // 当到达最后一行时，改变方向向上
            if (curRow == numRows - 1) {
                direction = -1;
            }
            // 当到达第一行时，改变方向向下
            else if (curRow == 0) {
                direction = 1;
            }
            curRow += direction;
        }
        
        // 拼接所有行
        string result;
        for (const string& row : rows) {
            result += row;
        }
        return result;
    }
};