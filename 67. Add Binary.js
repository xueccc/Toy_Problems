// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

var addBinary = function(a, b) {
  var result = '';
  var padding = 0;
  var shortest = '';
  var longest = '';
  var carryOver = 0;

  if (a.length > b.length) {
    padding = a.length - b.length;
    shortest = b;
    longest = a;
  } else {
    padding = b.length - a.length;
    shortest = a;
    longest = b;
  }

  for (var i = 0; i < padding; i++) {
    shortest = '0' + shortest;
  }

  for (var i = shortest.length - 1; i >= 0; i--) {
    var sum = Number(longest[i]) + Number(shortest[i]) + carryOver;

    if (sum === 3) {
      carryOver = 1;
      result = '1' + result;
    }

    if (sum === 2) {
      carryOver = 1;
      result = '0' + result;
    }

    if (sum <= 1) {
      carryOver = 0;
      result = `${sum}` + result;
    }
  }

  if (carryOver === 1) {
    result = '1' + result;
  }

return result;
};