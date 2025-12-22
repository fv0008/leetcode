public class Solution {
    public String convert(String s, int numRows) {
        char[] res = new char[s.length()];
        int index = 0;
        int n = 1;
        int count = 0;
        int padding = 2 * (numRows - 1); // if n(numRows) == 4, padding = 6;
        if(numRows == 1) return s;
        for(int i = 0; i < res.length; i++){
            res[i] = s.charAt(index);
            if(n!=1 && n!= numRows){
                int p = 2 * (numRows - n);
                if(i+1 < res.length && index+p < s.length())
                    res[++i] = s.charAt(index+p);
            }
            index = index + padding;
            if(index >= s.length()){
                index = ++count;
                n++;
            }
        }

        return new String(res);
    }
}