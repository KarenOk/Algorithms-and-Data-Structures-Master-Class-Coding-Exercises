// [a, b, b, c, c, c, c]
// left child index - (index * 2) + 1
// right child index -> (index * 2) + 2
// parent index -> Math.floor((index - 1) / 2) ;

class MinBinaryHeap {
	constructor() {
		this.values = [];
	}
	insert(value) {
		this.values.push(value);

		let currentIndex = this.values.length - 1;

		while (currentIndex > 0) {
			let parentIndex = Math.floor((currentIndex - 1) / 2);

			if (this.values[currentIndex] < this.values[parentIndex]) {
				// swap
				let parent = this.values[parentIndex];
				this.values[parentIndex] = this.values[currentIndex];
				this.values[currentIndex] = parent;
				currentIndex = parentIndex;
			} else break;
		}
	}
}
