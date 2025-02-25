//practice

class Graph2{
    constructor(){
        this.adjascencyList={}
    }

    addVertext(vertex){
        if(!this.adjascencyList[vertex]){
            this.adjascencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjascencyList[vertex1]){
            this.addVertext[vertex1]
        }

        if(!this.adjascencyList[vertex2]){
            this.addVertext[vertex2]
        }

        this.adjascencyList[vertex1].add(vertex2)
        this.adjascencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1,vertex2){
        if(!this.adjascencyList[vertex1] || !this.adjascencyList[vertex2]) return false;
        
        return this.adjascencyList[vertex1].has(vertex2)
    }
    
    removeEdge(vertex1,vertex2){
        if(!this.adjascencyList[vertex1] || !this.adjascencyList[vertex2]) return false;
        this.adjascencyList[vertex1].delete(vertex2)
        this.adjascencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjascencyList[vertex]) return ;

        for(let adjascentVertex of this.adjascencyList[vertex]){
            this.removeEdge(vertex,adjascentVertex);
        }

        delete this.adjascencyList[vertex]
    }

    display(){
        for(let vertex in this.adjascencyList){
            console.log(vertex +" -> "+[...this.adjascencyList[vertex]] )
        }
    }
}

const graph2 = new Graph2();

graph2.addVertext("A")
graph2.addVertext("B")
graph2.addVertext("C")
graph2.addVertext("D")
graph2.addVertext("E")
graph2.addVertext("F")
graph2.addVertext("G")
graph2.addEdge("A","B")
graph2.addEdge("A","G")
graph2.addEdge("A","C")
graph2.addEdge("B","D")
graph2.addEdge("B","G")
graph2.addEdge("C","D")
graph2.addEdge("C","E")
graph2.addEdge("E","F")
graph2.addEdge("E","C")
graph2.addEdge("F","G")
graph2.display()
console.log("************")
graph2.removeVertex("C")
graph2.display()