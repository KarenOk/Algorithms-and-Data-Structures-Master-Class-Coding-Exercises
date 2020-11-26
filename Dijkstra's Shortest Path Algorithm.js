class PriorityQueue {
	constructor() {
		this.values = [];
	}
	enqueue(value, priority) {
		this.values.push({ value, priority });
		this.sort();
	}
	dequeue() {
		return this.values.shift();
	}
	sort() {
		this.values.sort((a, b) => a.priority - b.priority);
	}
}

function Graph() {
	this.adjacencyList = {};
}

Graph.prototype.numEdges = function () {
	let total = 0;

	Object.values(this.adjacencyList).forEach(list => {
		total += list.length;
	});

	// note that we've double-counted up til now since we've looked at
	// the adjacencyList for every node.
	return total / 2;
};

Graph.prototype.addVertex = function (vertex) {
	this.adjacencyList[vertex] = [];
};

Graph.prototype.addEdge = function (vertex1, vertex2) {
	this.adjacencyList[vertex1].push(vertex2);
	this.adjacencyList[vertex2].push(vertex1);
};

Graph.prototype.removeVertex = function (vertex) {
	while (this.adjacencyList[vertex].length) {
		const adjacentVertex = this.adjacencyList[vertex].pop();
		this.removeEdge(adjacentVertex, vertex);
	}
	delete this.adjacencyList[vertex];
};

Graph.prototype.removeEdge = function (vertex1, vertex2) {
	this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
	this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
};

function WeightedGraph() {
	Graph.call(this);
}

WeightedGraph.prototype = Object.create(Graph.prototype);
WeightedGraph.prototype.constructor = WeightedGraph;

WeightedGraph.prototype.addEdge = function (vertex1, vertex2, weight) {
	this.adjacencyList[vertex1].push({ weight: weight, node: vertex2 });
	this.adjacencyList[vertex2].push({ weight: weight, node: vertex1 });
};

WeightedGraph.prototype.Dijkstra = function (source, dest) {
	const distances = {};
	const previous = {};
	const pq = new PriorityQueue();
	const visited = new Set();

	for (let v in this.adjacencyList) {
		previous[v] = null;
		if (v === source) distances[v] = 0;
		else distances[v] = Infinity;
		pq.enqueue(v, distances[v]);
	}

	while (pq.values.length) {
		const current = pq.dequeue();
		visited.add(current.value);

		for (let neighbour of this.adjacencyList[current.value]) {
			if (visited.has(neighbour.node)) continue;
			let tempDist = (current.value === source ? 0 : current.priority) + neighbour.weight;
			if (distances[neighbour.node] > tempDist) {
				distances[neighbour.node] = tempDist;
				pq.enqueue(neighbour.node, distances[neighbour.node]);
				previous[neighbour.node] = current.value;
			}
		}
	}

	// Track back from destination to source
	let result = [];
	let current = dest;
	while (current) {
		result.unshift(current);
		current = previous[current];
	}
	console.log(result);
};

const wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");

wg.addEdge("A", "B", 7);
wg.addEdge("A", "C", 3);
wg.addEdge("B", "C", 1);
wg.addEdge("B", "D", 2);
wg.addEdge("B", "E", 6);
wg.addEdge("C", "D", 2);
wg.addEdge("D", "E", 4);

wg.Dijkstra("A", "E"); // ["A", "C", "D", "E"]

var g = new WeightedGraph();

g.addVertex("A");
g.addVertex("Z");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("H");
g.addVertex("Q");
g.addVertex("G");

g.addEdge("A", "Z", 7);
g.addEdge("A", "C", 8);
g.addEdge("Z", "Q", 2);
g.addEdge("C", "G", 4);
g.addEdge("D", "Q", 8);
g.addEdge("E", "H", 1);
g.addEdge("H", "Q", 3);
g.addEdge("Q", "C", 6);
g.addEdge("G", "Q", 9);

g.Dijkstra("A", "E"); // ["A", "Z", "Q", "H", "E"]
g.Dijkstra("A", "Q"); // ["A", "Z", "Q"]
g.Dijkstra("A", "G"); // ["A", "C", "G"]
g.Dijkstra("A", "D"); // ["A", "Z", "Q", "D"]
