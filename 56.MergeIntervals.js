/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */

// [[1,4],[4,6], [5, 9]]


// [[1,3],[2,3],[8,10],[15,18]]
var merge = function(intervals) {
  if (!intervals.length){
      return [];
  }
  intervals.sort((a, b) => a.start - b.start);
  let i = 1
  while (i < intervals.length) {
      let last = intervals[i-1];
      let curr = intervals[i];
      if (last.end >= curr.start){
          if (last.end < curr.end){
             last.end = curr.end;
          } 
          intervals.splice(i, 1);
      } else {
          i++;
      }
  }
  return intervals;
    
};

// var merge = function(intervals) {
//   if (!intervals.length){
//       return [];
//   }
//   let sorted = intervals.sort((a, b) => a.start - b.start);
//   let result = [sorted[0]];
  
//   for (let i = 1; i < sorted.length; i++) {
//       let interval = sorted[i];
//       let last = result[result.length - 1];
//       // console.log(result, last, interval)
//       if (last.end >= interval.start) {
//          if (last.end < interval.end){
//            last.end = interval.end;
//          }
//       } else {
//          result.push(interval);
//       }
//   }
    
//   return result;
    
// };