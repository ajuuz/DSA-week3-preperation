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
        if(root===null){
            return
        }
        console.log(root.value);
        this.inorder(root.left)
        this.inorder(root.right)
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