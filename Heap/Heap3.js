class Heap3{
    constructor(){
        this.heap = [10,15,20,25,30,35,40,45]
    }

    getLeftChildIndex(i){
        return ( 2 * i ) + 1;
    }

    getRightChildIndex(i){
        return ( 2 * i ) + 2;
    }

    remove(){
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0)
    }

    heapifyDown(index){
        let smallest = index;
        let left = this.getLeftChildIndex(index)
        let right = this.getRightChildIndex(index);

        if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
            smallest = left;
        }

        if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
            smallest = right;
        }

        if(smallest !== index){
            [[this.heap[smallest]],[this.heap[index]]] = [[this.heap[index]],[this.heap[smallest]]];
            this.heapifyDown(smallest)
        }
    }

    display(){
        console.log(this.heap)
    }
}

const heap3 = new Heap3();


