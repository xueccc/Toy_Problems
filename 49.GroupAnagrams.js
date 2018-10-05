/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let grouped = {};
  
  for (var i = 0; i < strs.length; i++){
      let sorted = strs[i].split('').sort((a, b) =>{
          if (a < b){
              return 1;
          } else if (a > b){
              return -1;
          }
          return 0;
      }).join('')
      if (grouped[sorted]){
          grouped[sorted].push(strs[i]);
      } else {
          grouped[sorted] = [strs[i]];
      }
  }
  
  return Object.values(grouped);
  
};