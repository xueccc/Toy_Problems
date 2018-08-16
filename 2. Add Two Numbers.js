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
  while (l1 !== 0 && l2 !== 0) {
    sum[index] = (l1.val + l2.val)
    index++
    l1.next === null ? l1 = 0 : l1 = l1.next
    l2.next === null ? l2 = 0 : l2 = l2.next
  }
  index--
  
  while (index >= 0) {
      console.log(sum[index])
      if (!ls) {
        ls = {val: sum[index], next: null}
        tail = ls
      } else {
        tail.next = {val: sum[index], next: null}
      }
      index--;
  }
  console.log(ls)
  return ls;
};




//store sum of the 2 node values
//create new linked list using the new values