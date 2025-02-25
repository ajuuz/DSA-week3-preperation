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


}


const graph1 = new Graph1();
graph1.addVertex("A")
graph1.addVertex("B")
graph1.addVertex("C")
graph1.addEdge("A","B")
graph1.addEdge("B","C")

console.log(graph1.adjascencyList)