/**
  Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

  You need to find the shortest such subarray and output its length.

  Example 1:
  Input: [2, 6, 4, 8, 10, 9, 15]
  Output: 5
  Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
  Note:
  Then length of the input array is in range [1, 10,000].
  The input array may contain duplicates, so ascending order here means <=.
 */
var findUnsortedSubarray = function(nums) {
  const sortedArr = nums.map(x => x).sort((a,b) => a-b);
  let minIndex = nums.length - 1;
  let maxIndex = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== sortedArr[i]) {
      minIndex = Math.min(minIndex, i);
      maxIndex = Math.max(maxIndex, i);
    }
  }

  if (maxIndex <= minIndex) {
    return 0;
  }

  return maxIndex - minIndex + 1;
};

module.exports = findUnsortedSubarray;
