var numIslands = function(grid) {
  var count = 0;
  
  
  var RSL = function(r, c) {
      // console.log(r, c, grid)
      if (r + 1 < grid.length && grid[r +1][c] === '1') {
          grid[r+1][c] = 0;
          RSL(r+1, c)
      }
      if (r - 1 >= 0 && grid[r -1][c] === '1') {
          grid[r-1][c] = 0;
          RSL(r-1, c)
      }
      
      if (c + 1 < grid[0].length && grid[r][c+1] === '1') {
          grid[r][c+1] = 0;
          RSL(r, c+1)
      }
      if (c - 1 >= 0 && grid[r][c-1] === '1') {
          grid[r][c-1] = 0;
          RSL(r, c-1)
      }
  }
  
    for (var row = 0; row < grid.length; row++) {
      for (var col = 0; col < grid[row].length; col++) {
          if (grid[row][col] === '1') {
              count++;
              RSL(row, col)
          }
      }
  }

  return count;
};