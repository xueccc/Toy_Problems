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
var mergeTwoLists = function(l1, l2) {
  let sorted = new ListNode();
  let node = sorted;

  while (l1 || l2){
      if (l1 && l2){
          if (l1.val <= l2.val){
              node.next = l1;
              l1 = l1.next;
          } else if (l1.val > l2.val){
              node.next = l2
              l2 = l2.next;
          } 
      } else {
          if (l1 === null){
              node.next = l2;
              l2 = l2.next;
          } else if (l2 === null){
              node.next = l1;
              l1 = l1.next;
          }
      }
      node = node.next;
     
  }
  return sorted.next;
};