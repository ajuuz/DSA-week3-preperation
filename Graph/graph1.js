class Graph1{
    constructor(){
        this.adjascencyList ={}
    }

    addVertex(vertex){
        if(!this.adjascencyList[vertex]){
            this.adjascencyList[vertex] = [];
        }
    }


    addEdge(vertex1,vertex2){
        if(!this.adjascencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjascencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjascencyList[vertex1].push(vertex2)
        this.adjascencyList[vertex2].push(vertex1)
    }

    hasEdge(vertex1,vertex2){
        if(!this.adjascencyList[vertex1] || !this.adjascencyList[vertex2]) return false;

        if(this.adjascencyList[vertex1].includes(vertex2)) return true;
        return false;
    }

    display(){
        for(let vertex in this.adjascencyList){
            console.log(vertex+" -> "+this.adjascencyList[vertex])
        }
    }

    removeVertex(vertex){
        if(!this.adjascencyList[vertex]) return
        
        for(let adjascentVertex of this.adjascencyList[vertex]){
            this.removeEdges(vertex,adjascentVertex);
        }
        delete this.adjascencyList[vertex]
    }

    removeEdges(vertex1,vertex2){
        this.adjascencyList[vertex1] = this.adjascencyList[vertex1].filter((vertex)=>vertex!==vertex2)
        this.adjascencyList[vertex2] = this.adjascencyList[vertex2].filter((vertex)=>vertex!==vertex1)
    }

}


const graph1 = new Graph1();
graph1.addVertex("A")
graph1.addVertex("B")
graph1.addVertex("C")
graph1.addEdge("A","B")
graph1.addEdge("B","C")
graph1.removeVertex("B")
graph1.display()