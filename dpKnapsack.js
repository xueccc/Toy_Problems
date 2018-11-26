const knapSack = (items, maxWeight) => {
  let result = [];

  for (let i = 0; i < items.length; i++) {
    result[i] = new Array(maxWeight + 1);
  }

  for (let row = 0; row < items.length; row++) {
    let currItem = items[row];
      for (let w = 0; w <= maxWeight; w++) {
          if (currItem.weight <= w){
             let prevBest = row - 1 >= 0 ? result[row - 1][w] : 0;
             let remaining = 0;
             if (w - currItem.weight > 0) {
               remaining = row -1 >= 0 ? result[row - 1][w - currItem.weight] : 0;
             }

             result[row][w] = Math.max(prevBest, currItem.value + remaining);
          } else {
            result[row][w] = 0;
          } 
      }
  }
  console.log(result)
  return result[items.length -1][maxWeight];
}


const items = [
  {name: 'stereo',
   value: 3000,
   weight: 4},
   {name: 'laptop',
   value: 2000,
   weight: 3},
   {name: 'guitar',
   value: 1500,
   weight: 1},
]


console.log(knapSack(items))