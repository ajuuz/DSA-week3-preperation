//Here we are going to find the minimum and maximum value in tree

// Types of Data Structure

// Linear Data structure - elements arranged in a linear sequence order . example - stack , queue , linked list , array

//Non Linear Data structure - elements are arranged in a non linear sequence . example tree in a heirarchical order . graph


class Node{
    constructor(value){
        this.left=null;
        this.value= value;
        this.right= null
    }
}


class TreeMinMax{
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


    min(){
        if(this.isEmpty()) return -1;
        let curr = this.root
        while(curr.left){
            curr = curr.left;
        }
        return curr.value;
    }

    max(){
        if(this.isEmpty()) return -1;
        let curr = this.root
        while(curr.right){
            curr = curr.right;
        }
        return curr.value;
    }
    


    isEmpty(){
        return this.root === null;
    }

}

const bst2 = new TreeMinMax();
bst2.insert(10)
bst2.insert(5)
bst2.insert(15)
bst2.insert(3)
bst2.insert(7)
console.log(bst2.min())
console.log(bst2.max())