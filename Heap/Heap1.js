// Heap 

// Heap is a special tree data structure which should be a complete binary tree

//Two types of Heap 
// - Min Heap : the Parent node should be lesser than that of child node
// - Max Heap : the Parent node should be greater than that of child node


//In this file I have shown how to Build a Min Heap when an array is given

// 1. Build Heap

class Heap1{

    constructor(array=[]){
        this.heap = array;
        this.buildHeap();
    }

    getLeftChildInd(index){
        return  (2*index)+1
    }

    getRightChildInd(index){
        return (2*index)+2
    }

    getParent(index){
        return Math.floor((index-1)/2)
    }

    buildHeap(){
        for(let i = this.getParent(this.heap.length-1);i>=0;i--){
            this.heapifyDown(i)
        }
    }

    heapifyDown(index){
        let smallest = index;
        let left = this.getLeftChildInd(index);
        let right = this.getRightChildInd(index);
        if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
            smallest = left;
        }

        if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
            smallest = right;
        }

        if(smallest!==index){
            [[this.heap[index]],[this.heap[smallest]]] = [[this.heap[smallest]],[this.heap[index]]]
            this.heapifyDown(smallest);
        }
    }

    display(){
        console.log(this.heap)
    }
}

const heap1 = new Heap1([10,5,25,3,30,22,12])

heap1.display()
