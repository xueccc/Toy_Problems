var removeElements = function(head, val) {
  let previous = new ListNode(null);
  while(head && head.val === val) {
      head = head.next;
  }
  let nodePointer = head;  
  while(nodePointer) {
      if (nodePointer.val === val) { 
          previous.next = nodePointer.next;
      } else {
          previous = nodePointer;
      }
      nodePointer = nodePointer.next;
  }
  return head;
};