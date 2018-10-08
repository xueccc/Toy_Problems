/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let arr = str.split(' ');
  if (arr.length !== pattern.length) return false;
  let patToWord = {};
  let wordToPat = {};
  
  for (var i in pattern){
      let char = pattern[i];
      let word = arr[i]
      if (!patToWord[char] && !wordToPat[word]) {
          patToWord[char] = word;
          wordToPat[word] = char;
      } else {
          if (wordToPat[word] !== char) return false;
          if (patToWord[char] !== word) return false;
      }
  }
  return true;
};