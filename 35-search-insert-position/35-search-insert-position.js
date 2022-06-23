/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   for (var i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (target < nums[i]) {
      return i;
    } else if (target <= nums[i + 1] && i + 1 < nums.length) {
      return i + 1;
    }
  }
  return nums.length;
};