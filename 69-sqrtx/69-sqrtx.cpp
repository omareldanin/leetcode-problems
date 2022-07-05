class Solution {
public:
    int mySqrt(int x) {
       long long int mid = x/16;
        while(mid*mid > x){
            mid=mid/2;
        }
        for(;mid<1073741824;mid++){
            if(mid*mid > x){
                return mid-1;
            }
        }
        return mid-1;
    }
};