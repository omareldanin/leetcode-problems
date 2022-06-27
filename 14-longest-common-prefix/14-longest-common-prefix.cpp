class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string ans = strs[0];
       int n = 0; 
       for(int i = 0; i < ans.size(); i++) {
           for(int j = 1; j < strs.size(); j++) {
               if(ans[i] != strs[j][i]){
                  return ans.substr(0, n); 
                  
               } 
           }
        n++;   
       }
        
       return ans.substr(0, n); 
    }
};