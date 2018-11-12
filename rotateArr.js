const rotateArr = (arr, d, n) => {
  return arr.slice(d).concat(arr.slice(0, d));
} 

console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 2, 7))