var threeSum = function(nums) {
  var triplets = [];
  var obj = {};
  if (nums.length < 3) {
      return [];
  }
  nums.forEach(num => {
    if (obj[num]) {
        obj[num][1]++
    } else{  
      obj[num] = [true, 1]
    }
  });
  
 
  for (var i = 0; i < nums.length; i++) {
    if (obj[nums[i]][1] === 1) {
      obj[nums[i]][0] = false;
    }
      for (var j = i + 1; j < nums.length; j++) {
          if (obj[nums[j]][0]) {
              var sum = (nums[i] + nums[j])*-1;
              if (obj[nums[i]][1] === 1) {
                obj[nums[j]][0] = false;
              } 
              if (obj[sum] && obj[sum][0]) {
                triplets.push([nums[i], nums[j], sum])
                obj[sum][0] = false;
                obj[sum][1]--;
                obj[nums[i]][1]--;
                obj[nums[j]][1]--;
              } 
              if (obj[nums[j]][1] > 0) {
                obj[nums[j]][0] = true;
              }
              
          }
      }
    if (obj[nums[i]][1] > 0) {
        obj[nums[i]][0] = true;
    }
  }
  return triplets;
  
};