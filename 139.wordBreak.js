/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */


var wordBreak = function(s, wordDict) {
  var result = false;
  for (var i = 0; i < s.length; i++){
      if (result){
          break;
      }
      
      for (var e = 0; e < s.length; e++){
          var string = s.slice(i, e + 1);
           console.log(string)
          if (wordDict.includes(string)){
              result = true;
              break;
          }
      }
  }
  return result;
};