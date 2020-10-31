// [a, b, b, c, c, c, c]
// left child index - (index * 2) + 1
// right child index -> (index * 2) + 2
// parent index -> Math.floor((index - 1) / 2) ;

class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}
	insert(value) {
		this.values.push(value);

		let currentIndex = this.values.length - 1;

		while (currentIndex > 0) {
			let parentIndex = Math.floor((currentIndex - 1) / 2);

			if (this.values[currentIndex] > this.values[parentIndex]) {
				// swap
				let parent = this.values[parentIndex];
				this.values[parentIndex] = this.values[currentIndex];
				this.values[currentIndex] = parent;
				currentIndex = parentIndex;
			} else break;
		}
	}
	extractMax() {
		[this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
		const max = this.values.pop();

		let currentIndex = 0;

		while (currentIndex < this.values.length) {
			let current = this.values[currentIndex];
			let leftChildIndex = currentIndex * 2 + 1;
			let rightChildIndex = leftChildIndex + 1;
			let rightChild = this.values[rightChildIndex];
			let leftChild = this.values[leftChildIndex];

			if (leftChild > current && rightChild > current) {
				if (leftChild > rightChild) {
					this.values[currentIndex] = leftChild;
					this.values[leftChildIndex] = current;
					currentIndex = leftChildIndex;
				} else {
					this.values[currentIndex] = rightChild;
					this.values[rightChildIndex] = current;
					currentIndex = rightChildIndex;
				}
			} else if (leftChild > current) {
				this.values[currentIndex] = leftChild;
				this.values[leftChildIndex] = current;
				currentIndex = leftChildIndex;
			} else if (rightChild > current) {
				this.values[currentIndex] = rightChild;
				this.values[rightChildIndex] = current;
				currentIndex = rightChildIndex;
			} else break;
		}

		return max;
	}
}
