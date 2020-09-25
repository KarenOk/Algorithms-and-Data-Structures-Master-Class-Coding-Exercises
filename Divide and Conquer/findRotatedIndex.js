// Divide and Conquer - findRotatedIndex

// Write a function called findRotatedIndex which accepts a rotated array
// of sorted numbers and an integer. The function should return the index of the integer in the array.
// If the value is not found, return -1.

// Constraints:
// Time Complexity - O(log n)
// Space Complexity - O(1)

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
// findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16) // 5

function findRotatedIndex(arr, num) {
	let index;
	let pivot = findPivot(arr, 0, arr.length - 1); // find pivot

	function helper(start, end) {
		if (index) return;
		if (start === end) {
			index = arr[start] === num ? start : undefined;
			return;
		}

		let mid = Math.floor((start + end) / 2);
		helper(start, mid);
		helper(mid + 1, end);
	}

	helper(0, pivot);
	helper(pivot + 1, arr.length - 1);

	return index ? index : -1;
}

function findPivot(arr, start, end) {
	if (start > end) return -1;
	else if (start === end) return start;

	let mid = Math.floor((start + end) / 2);

	if (arr[mid] > arr[end]) {
		return findPivot(arr, mid + 1, end);
	} else {
		return findPivot(arr, start, mid);
	}
}
