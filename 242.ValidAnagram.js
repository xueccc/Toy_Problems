var isAnagram = function(s, t) {
  // s = s.split(' ').join('');
  // t = t.split(' ').join('');
  if (s.length !== t.length) return false;
  let map = {};
  
  for (let char of s){
    let uniCode = char.charCodeAt();
    map[uniCode] = map[uniCode]+1 || 1;
  }
  
  for (let char of t){
    let uniCode = char.charCodeAt();
    if (!map[uniCode]) {
      return false;
    }
    map[uniCode]--;
    
  }
  return true;
};