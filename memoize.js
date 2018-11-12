


 function memoize(asynchronousFunction) { 
  // your code here!
    let storage = {};
  //return input
  let newFunc = function() { 
     //create storage
  
    //create key
    let arg =  Array.prototype.slice.call(arguments);
    let originalCB = arg.pop();
    let inputs = JSON.stringify(arg);
    //check storage
  
    if(storage[inputs]){
      
        return storage[inputs]
    } else {
       let cb = function(err, result){
           storage[inputs] =  [err, result];
           originalCB(err, result);
       }
       asynchronousFunction(...arg, cb);
      
    }
  }
  return newFunc;
}

// where asynchronousFunction is a function that takes n arguments. The last argument of asynchronousFunction is a callback in the form of function callback(error, result).

//i: function
//o: fouction - memoize
//c: n/a
//e: n/a

function slowFunction(param1, param2, callback) {
setTimeout(function respond() {
 callback(null /* no error */, {
   firstParameter: param1,
   secondParameter: param2 // This can be anything, as long as it depends on the passed parameters
 });
}, 1000 /* make it slow */);
}

slowFunction('foo', 'bar', function onFirstInvocation(error, data) {
// Should take 1 second
console.log("without memo", data);
slowFunction('foo', 'bar', function onSecondInvocation(error, data) {
 // Should take 1 second
 console.log("without memo", data);
});
});

var fastFunction = memoize(slowFunction);

fastFunction('foo', 'bar', function onFirstInvocation(error, data) {
// Should take 1 second
console.log(data);
fastFunction('foo', 'bar', function onSecondInvocation(error, data) {
 // Should be immediate / very fast!
 console.log(data);
});
});