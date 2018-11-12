
// Write a function, persistence, that takes in a positive parameter num and returns its 
//multiplicative persistence, which is the number of times you must multiply the digits in num until 
//you reach a single digit.
// For example:
// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4 // and 4 has only one digit persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126, // 1*2*6 = 12, and finally 1*2 = 2 persistence(4) === 0 // because 4 is already a one-digit number
// but the inner function is a recursion, and it's just supposed to return the numOfOperations
// those console logs prove that the end condition is met and that numOfOperations is the right result when it breaks
// but it's just returning undefined for some reason
function persistence(num) {
  var numArr = [...num.toString()];
  var numOfOperations = 0;
  function multiplyArr(numArr){
    // console.log(numArr);
    if (numArr.length === 1){
      // console.log(numArr);
      // console.log('-------',numOfOperations);
      return numOfOperations;
    }
    numArr = [...(numArr.reduce((acc, val) => acc * val)).toString()];
    // console.log(numArr);
    numOfOperations++;
   
    return multiplyArr(numArr);

    }

    return multiplyArr(numArr);
    
  }
  
persistence(39)