// Imagine we have an image. We’ll represent this image as a simple 2D array where every pixel is a 1 or a 0. The image you get is known to have a single rectangle of 0s on a background of 1s. 

// Write a function that takes in the image and returns the coordinates of the rectangle of 0’s -- either top-left and bottom-right; or top-left, width, and height.


// Sample output:
// x: 3, y: 2, width: 3, height: 2
// 2,3 3,5
// 3,2 5,3 -- it’s ok to reverse columns/rows as long as you’re consistent


var image = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 0, 0],
];

// i: nested array
// o: array
// c: n/a
// e: [0]

//iterate the outter array, 
//inner array -
   // - check for 0
   //   -yes - track the location of the first zero, look for the next 1
   //   -- track location of top right corner
     
var findRec = function(outArr) {
  var topLeft;
  var topRight;
  var btmLeft;
  var btmRight;
  
  for (var i = 0; i < outArr.length; i++) {
    var innerArr = outArr[i];
    if (topLeft) {
      break;
    }
    for (var j = 0; j < innerArr.length; j++) {
      if (innerArr[j] === 0) {
        topLeft = [i, j];
        break;
      }
    }
  }
  
  if (topLeft) {
    let curArr = outArr[topLeft[0]]
    for (var i = topLeft[0]; i < curArr.length; i++) {
      if (curArr[i] === 1) {
        topRight = [topLeft[0], i - 1]
        break;
      } 
    }
    if (topRight) { topRight = topLeft };
  }
  
  if (topRight) {
    for (var i = topRight[0]; i < outArr.length; i++) {
      if (outArr[i][topRight[1]] === 1) {
        btmRight = [i - 1, topRight[1]];
        break;
      }
    }
    if (btmRight) {
      btmRight = [outArr.length - 1, topRight[1]]
    }
    
  }

  return [topLeft, topRight, btmRight];
  
  
}

console.log(findRec(image));