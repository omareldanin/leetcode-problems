class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
          int k = 0;
          int x = nums[0]-1;
          for (int i = 0; i < nums.size(); i++) {
            if (nums[i] != x) {
              x = nums[i];
              nums[k] = x;
              k++;
            }
          }
          return k;
    }
};