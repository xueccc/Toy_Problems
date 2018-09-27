// Given an expression string using the "+" and "-" operators like "5+16-2", write a function to find the total.



// Sample input/output:
// "6+9-12" => 3
// "1+2-3+4-5+6-7" => -2

// i: string
// o: int 
// c: n/a
// e: only int


// Sample input:
//     expression1 = "5+16-((9-6)-(4-2))"
//     expression2 = "22+((2-4))"
 
// Sample output:
//     evaluate(expression1) => 20
//     evaluate(expression2) => 20


var expression = "1-2-3-4";

let cal = function(string) {
  let result = 0;
  let operators = {'+': 'add', '-': 'minus'}
  let curOp = ['add'];
  let element = '';
  for (var i = 0; i < string.length; i++) {
    if (operators[string[i]]) {
      if (curOp === 'add') {
        result = result + Number(element);
        element = '';
        curOp = operators[string[i]];
      } else {
        result = result - Number(element);
        element = '';
        curOp = operators[string[i]];
      }
    } else {
      element = element.concat(string[i]);
    }
     // console.log(i, element, curOp, result);
  }
  
  if (curOp === 'add'){
    result = result + Number(element);
  } else {
    result = result - Number(element);
  }
  
  
  return result;
}

console.log(cal(expression));
