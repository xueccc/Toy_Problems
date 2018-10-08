/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// var insertIntoBST = function(root, val) {
//     let newNode = new TreeNode(val);
//     if (root === null) {
//         root = newNode;
//         return root;
//     }
    
//     let curr = root;
    
//     while(true){
 
//         if (curr.val >val){
//             if(curr.left){
//                 curr = curr.left;
//             } else {
//                 curr.left = newNode;
//                 return root;
//             }
//         } else if (curr.val < val){
//             if(curr.right){
//                 curr = curr.right;
//             } else {
//                 curr.right = newNode;
//                 return root;
//             }
//         }
//     }
    
// };

var insertIntoBST = function(root, val) {
  if (root === null){
    return new TreeNode(val);
  
  }
  if (val < root.val){
     
      root.left = insertIntoBST(root.left, val);
      
  } else if (val > root.val){
     
      root.right = insertIntoBST(root.right, val);
      
  }

  return root
}