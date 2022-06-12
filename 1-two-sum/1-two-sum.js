/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    let reminder = target - nums[i];
    let index = nums.indexOf(reminder);
    if (index !== -1 & index !== i) {
      return [i, index];
    }
  }
};