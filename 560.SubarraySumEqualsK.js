var subarraySum = function(nums, k) {
  let sum = 0;
  let subTotals = {0: 1};
  let result = 0;
  
  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (subTotals[sum - k]){
          result += subTotals[sum - k];
      }
      
      subTotals[sum] = subTotals[sum] + 1 || 1;
  }
  
  return result;
  
}

console.log(subarraySum([-1, -1, 1], 0));