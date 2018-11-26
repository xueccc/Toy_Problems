class Graph {
  constructor () {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
        this.adjList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjList[v1] = this.adjList[v1].filter(city => city !== v2);
    this.adjList[v2] = this.adjList[v2].filter(city => city !== v1);
  }

  removeVertex(v) {
    for (let city of this.adjList[v]) {
      this.removeEdge(v, city);
    }

    delete this.adjList[v];
  }
  
  //recrusive
  DFS(v) {
    let results = [];
    let visited = {};
    let adjList = this.adjList;

    let traverse = (vertex) => {
      if (!adjList[vertex]) {
        return;
      } else {
        visited[vertex] = true;
        results.push(vertex);

        adjList[vertex].forEach(city => {
          if (!visited[vertex]) traverse(city);
        })
      }
      return;
    }

    traverse(v)


    return results;
  }

  //iterative 
  depthFirstSearch(vtx) {
    let visited = {};
    let result = [];

    let stack = [vtx];

    while(stack.length) {
 
      let vertex = stack.pop();
      if (!visited[vertex]) {
        result.push(vertex);
        visited[vertex] = true;
    

      this.adjList[vertex].forEach(v => {
        if (!visited[v]){
          stack.push(v);
        }
      })
    }
    }

    return result;
  }

  BFS(vertex) {
   let q = [vertex];
   let result = [];
   let visited = {};
   let currV;

   while (q.length) {
     currV = q.shift();
     if(!visited[currV]) {
       visited[currV] = true;
       result.push(currV);
       this.adjList[currV].forEach(neighbor => {
         if(!visited[neighbor]) q.push(neighbor);
       })
     }
   }
   return result;
  }

  routeBetweenNodes(n1, n2) {
    let adjList = this.adjList;
    
    let visited = {};
    let q = [n1];
    visited[n1] = true;
    let foundRoute = false;

    while (!foundRoute && q.length) {
       let vertex = q.shift();
      

       if (vertex === n2) {
         foundRoute = true;
         break;
       }

       adjList[vertex].forEach(neighbor => {
         if (!visited[neighbor]) {
           visited[neighbor] = true;
           q.push(neighbor);
         }

       })
    }

    return foundRoute;
    
  }
}

var graph = new Graph();

graph.addVertex('S');
graph.addVertex('P');
graph.addVertex('U');
graph.addVertex('X');
graph.addVertex('Q');
graph.addVertex('Y');
graph.addVertex('V');
graph.addVertex('R');
graph.addVertex('W');
graph.addVertex('T');
graph.addVertex('Z');

graph.addEdge('S', 'P')
graph.addEdge('S', 'U')

graph.addEdge('P', 'X')
graph.addEdge('U', 'X')

graph.addEdge('P', 'Q')
graph.addEdge('U', 'V')

graph.addEdge('X', 'Q')
graph.addEdge('X', 'Y')
graph.addEdge('X', 'V')

graph.addEdge('Q', 'R')
graph.addEdge('Y', 'R')

graph.addEdge('Y', 'W')
graph.addEdge('V', 'W')

graph.addEdge('R', 'T')
graph.addEdge('W', 'T')

//graph.DFS('S')
console.log(graph)
// console.log(graph.DFS('S'))
// console.log(graph.depthFirstSearch('S'))
// console.log(graph.BFS('S'))
console.log(graph.routeBetweenNodes('R', 'W'))
console.log(graph.routeBetweenNodes('V', 'W'))
console.log(graph.routeBetweenNodes('V', 'Z'))


