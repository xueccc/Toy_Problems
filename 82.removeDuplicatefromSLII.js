
var deleteDuplicates = function(head) {
  var slow = new ListNode(null);        
  var newHead = slow;    
  var fast = head;
  
  while(fast != null) {
       debugger;
      if (fast.next == null || fast.val != fast.next.val) {
          // Point slow pointer's next to fast and move slow to fast
          slow.next = fast;
          slow = fast;
      } else {
          slow.next = null;
          
          // Fast forward if duplicates detected
          while (fast.next != null && fast.val == fast.next.val) fast = fast.next;
      }
  
      fast = fast.next;
  }
      
  return newHead.next;
};
