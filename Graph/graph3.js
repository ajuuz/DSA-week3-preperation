//Graph Traversal

// We can traverse the graph in two ways
// -- BFS - Traverse the neighbouring vertex first ( level by level )
//-- DFS - Traverse deep into the path before backTracking 

class Graph3{
    constructor(){
        this.adjascencyList ={}
    }

    addVertex(vertex){
        if(!this.adjascencyList[vertex]){
            this.adjascencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjascencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjascencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjascencyList[vertex1].add(vertex2)
        this.adjascencyList[vertex2].add(vertex1)
    }

    bfsTraversal(start){
        const queue = [start];
        const visited = new Set();
        visited.add(start);

        while(queue.length){
             const currVertex = queue.shift();
             for(let adjascentVertex of this.adjascencyList[currVertex]){
                if(!visited.has(adjascentVertex) && !queue.includes(adjascentVertex)){
                    queue.push(adjascentVertex);
                }
             } 
            visited.add(currVertex)
        }

        console.log(visited)
    }
}


const graph3 = new Graph3();
["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"].forEach(v => graph3.addVertex(v));

graph3.addEdge("A", "B");
graph3.addEdge("A", "C");
graph3.addEdge("A", "D");
graph3.addEdge("B", "E");
graph3.addEdge("B", "F");
graph3.addEdge("C", "G");
graph3.addEdge("D", "H");
graph3.addEdge("F", "I");
graph3.addEdge("F", "J");
graph3.addEdge("G", "J");
graph3.addEdge("G", "K");

graph3.bfsTraversal("A")