class Solution {
public:
    int reverse(int x) {
        long long int num=x;
        long long int reverse_number=0;
        int b=1;
        if(num < 0){
            num=num*-1;
            b=-1;
        }
        while(num > 0){
            int carry=num%10;
            reverse_number =(long int) reverse_number*10 + carry;
            num=num/10;
        }
        reverse_number *=b;
        if(reverse_number <= -2147483648 || reverse_number >= 2147483647){
            return 0;
        }
        return reverse_number;
    }
};