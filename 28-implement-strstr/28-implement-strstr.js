/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
      var result = -1;
  var x = [];
  if (needle.length === 0) {
    return 0;
  }
  for (var i = 0; i < haystack.length; i++) {
    if (needle[0] === haystack[i]) {
      x.push(i);
    }
  }
  for (let i = 0; i < x.length; i++) {
    var temp = haystack.slice(x[i], x[i] + needle.length);
    if (temp === needle) {
      result = x[i];
      break;
    }
  }
  return result;
};