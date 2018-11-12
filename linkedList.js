class Node{
  constructor(val){
      this.val = val;
      this.next = null;      
  }
}

class SinglyLinkedList{
  constructor(val){
      this.head = null;
      this.tail = null;
      this.length = 0 ;   
  }
  push(val){
      let newNode = new Node(val);
      if (!this.head) {
          this.head = newNode;
          this.tail = this.head;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
          this.length++;
      
      return this;
  }
  pop(){
      if (!this.head) return undefined;
      let curr = this.head;
     
      while (curr.next.next){
          curr = curr.next;
      }
      
      let removed = curr.next;
      this.tail = curr;
      this.length--;
 
      return removed;
  }

  get(num){
    let count = 0;
    let node = this.head;
    if (num === 0) return this.head;
    
    
    while(count < num ){
        node = node.next;
        count++;
    }
    return node;
}
}

let list = new SinglyLinkedList();
list.push(5);
list.push(10);
list.push(15);
// console.log(list)
// console.log(list.pop());
// console.log(list)
console.log(list.get(3).val)
