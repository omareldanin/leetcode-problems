/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   if(x === 0)
        return true
    
    const firstNumberToString = String(x)
    
    let secondNumberToString = ""
    
    while(x >= 1)
        {
            let currentDigitToString = String(Math.round(x % 10))
            
            secondNumberToString += currentDigitToString
            
            x = Math.trunc(x / 10);
        }
    
    return firstNumberToString === secondNumberToString
};