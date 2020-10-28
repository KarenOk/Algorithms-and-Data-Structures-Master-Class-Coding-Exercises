class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		const node = new Node(value);
		if (!this.root) this.root = node;
		else {
			let currentNode = this.root;
			while (currentNode) {
				if (value < currentNode.value) {
					if (currentNode.left) currentNode = currentNode.left;
					else {
						currentNode.left = node;
						currentNode = null;
					}
				} else {
					if (currentNode.right) currentNode = currentNode.right;
					else {
						currentNode.right = node;
						currentNode = null;
					}
				}
			}
		}

		return this;
	}
	remove(value) {
		if (!this.root) return;

		let parent;
		let current = this.root;

		// check if the current node on the left side or right side of the parent node
		const fromLeft = (current, parent) => current.value < parent.value;

		while (current) {
			if (value === current.value) {
				// node has been found

				if (!current.left && !current.right) {
					// is found node a leaf? delete found node

					if (current === this.root) this.root = null;
					else if (fromLeft(current, parent)) parent.left = null;
					else parent.right = null;

					return current; // removed node
				} else if ((current.left && !current.right) || (!current.left && current.right)) {
					// does found node have one child? bypass found node

					if (current.left) {
						if (current === this.root) this.root = current.left;
						else if (fromLeft(current, parent)) parent.left = current.left;
						else parent.right = current.left;
					} else {
						if (current === this.root) this.root = current.right;
						else if (fromLeft(current, parent)) parent.left = current.right;
						else parent.right = current.right;
					}

					return current; // removed node
				} else {
					// found node definitely has two children, find successor

					let removed = new Node(current.value); // create node to be returned with the value about to be replaced
					let successor = current.right;
					let prevSuccessor = current;

					while (successor.left) {
						prevSuccessor = successor;
						successor = successor.left;
					}

					// check to see if the successor is further down or is a direct child of current
					// append the replace successor with its children on the right
					if (prevSuccessor !== current) prevSuccessor.left = successor.right;
					else prevSuccessor.right = successor.right;

					current.value = successor.value;
					return removed;
				}
			} else {
				// keep searching
				parent = current;
				if (value < current.value) current = current.left;
				else current = current.right;
			}
		}

		return removed;
	}

	find(value) {
		let currentNode = this.root;

		while (currentNode) {
			if (value === currentNode.value) return currentNode;
			else if (value < currentNode.value) currentNode = currentNode.left;
			else currentNode = currentNode.right;
		}

		return;
	}
	DFSPreOrder() {
		const result = [];

		(function helper(node) {
			if (!node) return;
			result.push(node.value);
			helper(node.left);
			helper(node.right);
		})(this.root);

		return result;
	}
	DFSInOrder() {
		const result = [];

		(function helper(node) {
			if (!node) return;
			helper(node.left);
			result.push(node.value);
			helper(node.right);
		})(this.root);

		return result;
	}
	DFSPostOrder() {
		const result = [];

		(function helper(node) {
			if (!node) return;
			helper(node.left);
			helper(node.right);
			result.push(node.value);
		})(this.root);

		return result;
	}
	BFS() {
		if (!this.root) return [];

		const result = [];
		const queue = [this.root];
		let pointer = 0;

		while (pointer < queue.length) {
			let currentNode = queue[pointer];
			result.push(currentNode.value);
			if (currentNode.left) queue.push(currentNode.left);
			if (currentNode.right) queue.push(currentNode.right);
			pointer++;
		}

		return result;
	}
}
