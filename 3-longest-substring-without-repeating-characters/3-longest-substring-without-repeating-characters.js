/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var result = "";
  for (var i = 0; i < s.length; i++) {
    var str = s[i];
    for (var j = i + 1; j < s.length; j++) {
      if (!str.includes(s[j])) {
        str += s[j];
      } else {
        break;
      }
    }
    if (str.length > result.length) {
      result = str;
    }
  }
  return result.length;
};