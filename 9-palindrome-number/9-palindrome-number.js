/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
    return false;
  } else {
    let stringNum = x.toString().split("").reverse().join("");
    if (parseInt(stringNum) === x) {
        return true;
    } else {
      return false;
    }
  }
};