class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}
	addEdge(v1, v2) {
		if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
			this.adjacencyList[v1].push(v2);
			this.adjacencyList[v2].push(v1);
		}
	}
	removeEdge(v1, v2) {
		if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
			this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
			this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
		}
	}
	removeVertex(vertex) {
		if (this.adjacencyList[vertex]) {
			for (let v of this.adjacencyList[vertex]) this.removeEdge(v, vertex);
			delete this.adjacencyList[vertex];
		}
	}
	DFSRecursive(start) {
		const visited = new Set();

		const helper = vertex => {
			if (!visited.has(vertex)) {
				visited.add(vertex);
				let children = this.adjacencyList[vertex];
				for (let child of children) helper(child);
			}
		};

		helper(start);

		return Array.from(visited);
	}
}
