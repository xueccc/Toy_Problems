// (((()))) 4
// ((()))() 3, 1
// (())(()) 2, 2
// (())()() 2, 1 , 1
// ()((())) 1, 3
// ()(())() 1, 2, 1
// ()()(()) 1, 1, 2
// ()()()() 1, 1, 1, 1


var generateParenthesis = function(n) {
  let result = [];
  
  let dfs = (l, r, str) => {
      if (l > r) {
          return;
      }
      if (l === 0 && r === 0) {
          result.push(str);
          return;
      }
 
      if(l) dfs(l - 1, r, str + '(');
      if(r) dfs(l, r - 1, str + ')');
      
  }
  
  dfs(n, n, '');
  
  return result;
};