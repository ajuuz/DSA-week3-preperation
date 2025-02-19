//check for bst 


class Node{
    constructor(value){
        this.left=null;
        this.value= value;
        this.right= null
    }
}


class BstCheckerTree{
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

    isBst(){
        const stack = [{node:this.root,min:-Infinity,max:Infinity}];

        while(stack.length){
            const {node,min,max} = stack.pop()

            if(node.value < min || node.value > max)
            {
                return false;
            }

            if(node.right){
                stack.push({node:node.right,min:node.value,max})
            }
            
            if(node.left){
                stack.push({node:node.left,min:min,max:node.value})
            }
        }

        return true;
    }

   
    

   



    isEmpty(){
        return this.root === null;
    }

}

const bstChecker = new BstCheckerTree();
bstChecker.insert(10)
bstChecker.insert(5)
bstChecker.insert(15)
bstChecker.insert(3)
bstChecker.insert(7)
bstChecker.insert(8)
console.log(bstChecker.isBst())

const invalidBst = new Node(10)
invalidBst.left = new Node(5)
invalidBst.right = new Node(15)
invalidBst.right.right = new Node(13)
const sampleBst = new BstCheckerTree();
sampleBst.root = invalidBst;

console.log(sampleBst.isBst())