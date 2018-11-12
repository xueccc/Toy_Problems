function binarySearch(arr, target){
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  let mid;
  
  while (left <= right){
     
      mid = Math.floor((right + left)/2);
      console.log(mid, arr[mid])
      
      if (arr[mid] === target) return mid;
      
      if (arr[mid] > target){
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
}

console.log(binarySearch([1, 2, 3, 4, 5], 2))