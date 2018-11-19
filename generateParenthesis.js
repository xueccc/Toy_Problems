var generateParenthesis = function(n) {
  const arr = []
  function writeKuo(_string, _leftK, _rightk) {
      if ( _leftK > _rightk) return
      if (_leftK < 0 || _rightk < 0) return
      if (_leftK === 0 && _rightk === 0) {
          arr.push(_string)
          return
      }
      writeKuo((_string+"("), (_leftK - 1), _rightk)
      writeKuo((_string+")"), _leftK, (_rightk - 1))
  }
  writeKuo("(", (n-1), n)
  return arr
};

console.log(generateParenthesis(3))