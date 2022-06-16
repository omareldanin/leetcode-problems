/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
var values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  var result = 0;
   for (let i = 0; i < s.length; ) {
    if (values[`${s[i]}`] < values[`${s[i + 1]}`]) {
      result += values[`${s[i + 1]}`] - values[`${s[i]}`];
      i += 2;
    } else {
      result += values[`${s[i]}`];
      i++;
    }
  }
  return result;
};