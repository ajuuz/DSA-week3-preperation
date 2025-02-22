// Heap Sort

// here we have to sort the array in ascending order

class Heap4{
    constructor(){
        this.heap = []
    }

    getParent(index){
        return Math.floor((index-1)/2)
    }

    getLeftChildIndex(i){
        return ( 2 * i ) + 1;
    }

    getRightChildIndex(i){
        return ( 2 * i ) + 2;
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp(this.heap.length-1);
    }

    heapifyUp(index){
        if(index===0) return;

        let parentIndex  = this.getParent(index);
        if(this.heap[index] > this.heap[parentIndex])
        {
            [[this.heap[index]],[this.heap[parentIndex]]]=[[this.heap[parentIndex]],[this.heap[index]]];
            this.heapifyUp(parentIndex)
        }
    }

    
    sort(){
        let n=this.heap.length;
        for(let i=n-1;i>=0;i--){
            [[this.heap[0]],[this.heap[i]]] = [[this.heap[i]],[this.heap[0]]];
            this.heapifyDown(0,i)
        }
    }
    
    heapifyDown(index,n){
        let smallest = index;
        let left = this.getLeftChildIndex(index)
        let right = this.getRightChildIndex(index)

        if(left < n && this.heap[left] > this.heap[smallest]){
            smallest = left
        }

        if(right < n && this.heap[right] > this.heap[smallest]){
            smallest = right
        }

        if(smallest!==index){
            [[this.heap[smallest]],[this.heap[index]]] = [[this.heap[index]],[this.heap[smallest]]]
            this.heapifyDown(smallest,n)
        }
    }

    display(){
        console.log(this.heap)
    }
}

const heap4 = new Heap4();
heap4.insert(10)
heap4.insert(20)
heap4.insert(15)
heap4.insert(40)
heap4.insert(35)
heap4.insert(25)
heap4.insert(30)
heap4.display()
heap4.sort()
heap4.display()