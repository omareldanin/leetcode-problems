class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int n =digits.size()-1;
        if(digits[n] < 9){
            digits[n]=digits[n]+1;
            return digits;
        }else{
            while(n>=0){
                if(digits[n] != 9 ){
                    digits[n]=digits[n]+1;
                    return digits;
                }else if(digits[n] == 9 && n != 0){
                    digits[n]=0;
                }else{
                    digits[0]=1;
                    digits.push_back(0);
                    return digits;
                }
                n--;
            }
        }
        return digits;

    }
};