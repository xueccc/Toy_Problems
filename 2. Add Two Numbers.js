/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var index = 0;
  var sum = [];
  var ls;
  var tail;
  var carryVal = 0;
  var arr = [];
  while (l1 !== 0 && l2 !== 0) {
    sum[index] = (l1.val + l2.val)
    index++
    l1.next === null ? l1 = 0 : l1 = l1.next
    l2.next === null ? l2 = 0 : l2 = l2.next
  }
  index--
  
  while (index >= 0) {
      console.log(sum[index])
      var value = sum[index]
      if (!ls) {
        ls = {val: value, next: null}
        tail = ls
      } else {
        if (carryVal === 1) {
         value++
         carryVal--
        }
        if (value > 9) {
            carryVal = 1;
            value = value - 10;
        }
        tail.next = {val: value, next: null}
        tail = tail.next
        
      }
     
      arr[index] = value
      index--;
  }
   if (carryVal = 1) {
          arr.shift(1);
      }
  
  return arr;
};




//store sum of the 2 node values
//create new linked list using the new values