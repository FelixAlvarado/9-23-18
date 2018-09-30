class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let node1 = new Node(10);
let node2 = new Node(5);
let node3 = new Node(-3);
let node4 = new Node(3);
let node5 = new Node(1);
let node6 = new Node(11);
let node7 = new Node(3);
let node8 = new Node(-2);
let node9 = new Node(2);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node4.left = node7;
node4.right = node8;
node5.right = node9;
node3.right = node6;

function numberPathSum(root, target, cache = {}, count = 0){
    if(!root){
        return count;
    }




    if(root.val === target){
        count += 1;
    }

    if(cache[root.val]){
        count += 1;
    }


    
    let newCache = {};
    Object.keys(cache).forEach((el)=>{
        newCache[el = root.val] = true;
    });

    return numberPathSum(root.left, target, Object.assign({},newCache), count) + numberPathSum(root.right, target, Object.assign({},newCache), count);
}

console.log('returns 8', numberPathSum(node1, 8));