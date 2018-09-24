
var buildTree = function(inorder, postorder) {
    let root  = new TreeNode(postorder.pop());
    let rootIndex = Math.floor(inorder.length/2);
    if (inorder[rootIndex] != root.val){
        if(inorder[rootIndex - 1] === root.val){rootIndex -= 1;}
        else{rootIndex += 1;}
    }
    let last = null;
    for(let i = 1; i < rootIndex; i++){
        if(i + 1 === rootIndex) continue;
        if()
    }
};