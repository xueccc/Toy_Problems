
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

var twoSum = function(nums, target) {
    var pairs = {};
    for (var i = 0; i < nums.length; i++) {
      
          var diff = target - nums[i];
          if (pairs[nums[i]]) {
              debugger;
              pairs[nums[i]].push(i)
              return pairs[nums[i]];
          } else {
              pairs[diff] = [i];
          }
        }
    
};
