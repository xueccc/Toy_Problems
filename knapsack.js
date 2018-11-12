let knapsack = (items, weight) => {
  let cache = Array(weight).fill().map(a => []);
  
  for(let item = 1; item < items.length; item++){
    for (let w = 1; w <= weight; w++){
      
       if (w < weight[item].w) cache[item][w] = 0;
     }
  }
  console.log(cache)
}


console.log(knapsack([{w: 2, v: 6}, {w: 2, v: 10}, {w: 3, v: 12}], 8));