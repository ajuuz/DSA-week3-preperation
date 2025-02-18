class Node{
    constructor(value){
        this.left = null;
        this.value = value;
        this.right = null;
    }
}


class Tree{
    constructor(){
        this.root = null;
    }

    insertValue(value){
        const node = new Node(value);

        if(!this.root){
            this.root = node;
        }else{
            this.insertRecursive(this.root,node)
        }
    }

    insertRecursive(root,node){
        if(root.value > node.value){
            if(root.left===null){
                root.left = node
            }else{
                this.insertRecursive(root.left,node)
            }
        }
        else{
            if(root.right===null){
                root.right = node;
            }else{
                this.insertRecursive(root.right,node)
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


    searchValue(root,value){
        if(!root) return false;
        else{
            if(root.value === value){ 
                return true
            }
            else{
                if(root.value < value){
                    return this.searchValue(root.left,value)
                }
            else {
                return this.searchValue(root.right,value)
            }
        }
        }
    }
}


const tree = new Tree();
tree.insertValue(15)
tree.insertValue(10)
tree.insertValue(8)
tree.insertValue(16)
tree.insertValue(24)
tree.insertValue(3)
console.log(tree.searchValue(tree.root,100))
console.log(tree.searchValue(tree.root,10))
console.log(tree.searchValue(tree.root,15))
console.log(tree.searchValue(tree.root,24))
console.log(tree.searchValue(tree.root,20))

tree.inorder(tree.root)