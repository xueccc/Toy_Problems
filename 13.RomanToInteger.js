/**
 * @param {string} s
 * @return {number}
 */

//iterate the symbols from right to left
  //check if the next symbols rep smaller or larger num
  //sm - subtract
  //lg - add
  var romanToInt = function(s) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let sum = 0;
    
   // for (let i = 0; i < s.length; i++){
   //     if (map[s[i]] < map[s[i + 1]]){
   //         sum = sum - map[s[i]] + map[s[i+1]];
   //         i++;
   //     } else {
   //        sum +=  map[s[i]];
   //     }
   // }
    
      
   for (let i = 0; i < s.length; i++){
       if (map[s[i]] < map[s[i + 1]]){
           sum = sum - map[s[i]] 
          
       } else {
          sum +=  map[s[i]];
       }
   }
    return sum;
};