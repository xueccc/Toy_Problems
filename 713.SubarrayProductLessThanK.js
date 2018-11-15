var numSubarrayProductLessThanK = function(nums, k) {
  let result = 0;
  
  for (let i = 0; i < nums.length; i++) {
      let sum = nums[i];
      let j = i;
      while (sum < k && j >= 0) {
          result++;
          j--;
          console.log(sum, j)
          sum *= nums[j];
      }
  }
  
  return result;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100))



