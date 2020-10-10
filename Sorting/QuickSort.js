function pivot(arr, comparator, start = 0, end = arr.length - 1) {
	let pivotIndex = start; // pivot is the first arr element
	let swapIndex = start + 1; // position of the next swap

	if (typeof comparator !== "function") {
		comparator = (a, b) => a - b;
	}

	for (let i = 1; i < end + 1; i++) {
		if (comparator(arr[i], arr[pivotIndex]) < 0) {
			[arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]; // swap to the left if elem is less than pivot
			swapIndex++; // move swap pointer to the next swap position
		}
	}

	// at the end, move pivot to position of last swap
	[arr[pivotIndex], arr[swapIndex - 1]] = [arr[swapIndex - 1], arr[pivotIndex]];
	pivotIndex = swapIndex - 1;
	return pivotIndex;
}
