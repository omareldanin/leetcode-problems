class Solution {
public:
    int divide(int dividend, int divisor) {
       long long int result;
        result=(long int) dividend/divisor;
        if(result>2147483647){
            return 2147483647;
        }
        if(result < -2147483648){
            return -2147483648;
        }
        return result;
    }
};