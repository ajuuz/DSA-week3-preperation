
//Finding closest using by dfs traversal

class Node{
    constructor(value){
        this.left=null;
        this.value= value;
        this.right= null
    }
}


class ClosestBinary{
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

    closestUsingPreOrder(value){
        let closest={
            distance:9999,
            closestNode :null
        }
        this.preOrder(this.root,closest,value)
        console.log(closest)
    }

    preOrder(root,closest,value){
        if(root){
            if(Math.abs(root.value - value) < closest.distance){
                closest.distance = Math.abs(root.value - value)
                closest.closestNode = root.value;
            }
            this.preOrder(root.left,closest,value)
            this.preOrder(root.right,closest,value)
        }
    }

    closest(target){
        if(this.isEmpty()) return console.log("tree is empty");
        let node = this.root;
        let closest=Infinity;
        while(node){
            if(Math.abs(target - node.value) < Math.abs(target - closest))
            {
                closest = node.value
            }

            if(target < node.value){
                node = node.left;
            }else{
                node = node.right;
            }
        }

        console.log(closest);
    }

    isEmpty(){
        return this.root === null;
    }

}

const closest = new ClosestBinary();
closest.insert(10)
closest.insert(5)
closest.insert(16)
closest.insert(3)
closest.insert(6)

closest.closestUsingPreOrder(14)
closest.closest(14)



