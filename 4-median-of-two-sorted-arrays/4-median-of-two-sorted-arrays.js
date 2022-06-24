/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
 var i = 0,
    j = 0;
  var merged = [];
  var result = 0;
  while (i < nums1.length || j < nums2.length) {
    if (!nums1[i] && nums1[i] !== 0) {
      merged.push(nums2[j]);
      j++;
    } else if (!nums2[j] && nums2[i] !== 0) {
      merged.push(nums1[i]);
      i++;
    } else if (nums1[i] === nums2[j]) {
      merged.push(nums1[i], nums2[j]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }
  if (merged.length % 2 === 1) {
    let pos = Math.floor(merged.length / 2);
    result = merged[pos];
  } else {
    let pos = Math.floor(merged.length / 2) - 1;
    result = (merged[pos] + merged[pos + 1]) / 2;
  }
  console.log(merged);
  return result;
};