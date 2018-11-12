const dcSum = (arr) => {
   if (arr.length === 0) return 0;

   return arr[0] + dcSum(arr.slice(1));
}

// console.log(dcSum([3,3,3]))

const dcCount = (arr) => {
  if (arr.length === 0) return 0;

  return 1 + dcSum(arr.slice(1));
}

const dcFindMax = (arr) => {
  
  let midPoint = Math.round(arr.length / 2);

  if (arr.length === 1){
    return arr[0];
  }
 
  return Math.max(dcFindMax(arr.slice(0, midPoint)), dcFindMax(arr.slice(midPoint)))
}

// console.log(dcFindMax([1,4,10,11, 25,15, 0, 0, 15]))

const dcBinarySearch = (arr, target, left = 0, right = arr.length) => {
  let midPoint = Math.floor(((right - left)/2) + left) ;
  console.log(midPoint, left, right)
  if (left > right || right > arr.length || left < 0 || midPoint > arr.length - 1) return -1;
  if (arr[midPoint] === target){
    return midPoint;
  } else if (arr[midPoint] < target){
    return dcBinarySearch(arr, target, midPoint + 1, right);
  } else {
    return dcBinarySearch(arr, target, left, midPoint -1);
  }
}

console.log(dcBinarySearch([1,2, 3,4,5], 5))