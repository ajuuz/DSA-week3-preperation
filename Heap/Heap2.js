// Now we have to insert a element to the heap

// we have to push the new value to the heap.: - 
// There are two situation may be it satisfies min or max heap requirement. 
// IF not satisfiying we have to heapify up  to check if the immediate parent is greater or smaller than the current element .
// if not swap until it reaches the index 0 or root element

class Heap2{
    constructor(){
        this.heap = [];
    }

    getParent(index){
        return Math.floor((index-1)/2)
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp(this.heap.length-1);
    }

    heapifyUp(index){
        if(index===0) return;

        let parentIndex  = this.getParent(index);
        if(this.heap[index] < this.heap[parentIndex])
        {
            [[this.heap[index]],[this.heap[parentIndex]]]=[[this.heap[parentIndex]],[this.heap[index]]];
            this.heapifyUp(parentIndex)
        }
    }

    display(){
        console.log(this.heap)
    }
}


const heap2 = new Heap2();
heap2.insert(5)
heap2.insert(10)
heap2.insert(15)
heap2.insert(20)
heap2.insert(25)
heap2.insert(30)
heap2.insert(3)
heap2.display()