// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function(nums) {
  let zeroes = 0
  let newIdx = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroes++
    } else {
      nums[newIdx] = nums[i]
      newIdx++
    }
  }
  for (var j = nums.length - 1; j >= nums.length - zeroes; j-- ) {
      nums[j] = 0
  }
  return nums
};


moveZeroes([0,1,0,3,12])
