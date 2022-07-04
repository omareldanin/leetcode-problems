/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var k = 0;
  var x = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== x) {
      x = nums[i];
      nums[k] = x;
      k++;
    }
  }
  return k;
};