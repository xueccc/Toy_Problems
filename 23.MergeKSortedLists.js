/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists.length) return [];
  let sorted = lists[0];
  
  for (var i = 1; i < lists.length; i++){
      sorted = mergeTwoLists(sorted, lists[i])
     
  }
  
  return sorted;
  
 
};

var sortAndMerge = function (a, b) {
  let sorted = new ListNode();
  let node = sorted;
  
  while(a || b){
      if (a && b){
          if(a.val <= b.val){
              node.next = a;
              a = a.next;
          } else if(a.val > b.val) {
              node.next = b;
              b = b.next;
          }
      } else {
          if (a === null){
              node.next = b;
              b = b.next;
          } else {
              node.next = a;
              a = a.next;
          }
      }
      node = node.next;
  }
  
  return sorted.next;
}


var mergeTwoLists = function(l1, l2) {
  let sorted = new ListNode();
  let node = sorted;

  while (l1 && l2){
   
          if (l1.val <= l2.val){
              node.next = l1;
              l1 = l1.next;
          } else if (l1.val > l2.val){
              node.next = l2
              l2 = l2.next;
          } 
      // } else {
      //     if (l1 === null){
      //         node.next = l2;
      //         l2 = l2.next;
      //     } else if (l2 === null){
      //         node.next = l1;
      //         l1 = l1.next;
      //     }
      // }
      
      node = node.next;
     
  }
  
  node.next = l1 || l2;
  return sorted.next;
};