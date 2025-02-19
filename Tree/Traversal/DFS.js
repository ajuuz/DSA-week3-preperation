// There and two types of traversal in Tree;

// DFS - traversal in which explore start from the root and move as far as possible in each branches before backtracking 

// there are 3 ways of DFS traversal : - 1) Inorder 2)PreOrder 3)PostOrder


class Node{
    constructor(value){
        this.left=null;
        this.value= value;
        this.right= null
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new Node(value);

        if(this.isEmpty()){
            this.root = newNode;
        }
        else{
            this.insertNode(this.root,newNode)
        }

    }

    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode;
            }else{
                this.insertNode(root.left,newNode)
            }
        }
        else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    search(root,value){
        if(!root){
            return false;
        }
        else{
            if(root.value===value){
                return true;
            }
            else{
                if(value < root.value){
                   return this.search(root.left,value)
                }else{
                   return this.search(root.right,value)
                }
            }
        }
    }

    
    inorder(root){
        if(root){
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right)
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }



    isEmpty(){
        return this.root === null;
    }

}

const bst = new BinarySearchTree();
bst.insert(100)
bst.insert(20)
bst.insert(10)
bst.insert(30)
bst.insert(200)
bst.insert(150)
bst.insert(300)
bst.inorder(bst.root)