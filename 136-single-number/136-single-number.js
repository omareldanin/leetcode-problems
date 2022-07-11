/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
      var result = [];
  for (let i = 0; i < nums.length; i++) {
    var x = true;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === nums[i]) {
        result.splice(j, 1);
        x = false;
      }
    }
    if (x) {
      result.push(nums[i]);
    }
  }
  return result[0];
};