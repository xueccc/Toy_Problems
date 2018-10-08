class Node{
  constructor(val){
    this.val = val,
    this.left = null,
    this.right = null
  }
}

class BST{
  constructor(){
    this.root = null;
  }
  insert(val){
    
    let newNode = new Node(val);
    if (!this.root) return this.root = newNode;
    let curr = this.root;
    while (true){
      if (curr.val > val){
        if (curr.right) {
          curr = curr.right;
        } else {
          curr = newNode;
        }
      } else if (curr.val < val) {
        if (curr.left) {
          curr = curr.left;
        } else {
          curr = newNode;
        }
      }
    }
    return;
  }

  find(value){
    let node = this.root;
    while (node){
      if(node.val === value){
        return node;
      } else if (node.val > value){
        node = node.right;
      } else {
        node = node.left;
      }

    }
    return false;
  }
}

let tree= new BST();
tree.insert(20);
console.log(tree)
tree.insert(15);
console.log(tree)
console.log(tree.find(15));

