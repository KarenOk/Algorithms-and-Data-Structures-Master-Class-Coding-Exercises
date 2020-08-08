// Divide and Conquer - countZeroes

// Given an array of 1s and 0s which has all 1s first followed by all 0s,
// write a function called countZeroes, which returns the number of zeroes in the array.

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0

// Time Complexity - O(log n)

const countZeroes = arr => {
	let zeros = 0;

	(function helper(arr) {
		if (!arr.length || arr[arr.length - 1] === 1) return;
		if (arr[0] === 0) {
			zeros += arr.length;
			return;
		}
		let mid = Math.floor(arr.length / 2);
		helper(arr.slice(0, mid));
		helper(arr.slice(mid));
	})(arr);

	console.log(zeros);
	return zeros;
};
