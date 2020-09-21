// Divide and Conquer - sortedFrequency

// Given a sorted array and a number, write a function called sortedFrequency
// that counts the occurrences of the number in the array

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

// Time Complexity - O(log n)

const sortedFrequency = (arr, num) => {
	function helper(arr, num) {
		if (!arr.length || arr[arr.length - 1] < num) return 0;
		if (arr.length === 1) return arr[0] === num ? 1 : 0;
		if (arr[0] === num && arr[arr.length - 1] === num) return arr.length;

		const mid = Math.floor(arr.length / 2);
		return helper(arr.slice(0, mid), num) + helper(arr.slice(mid), num);
	}
	const result = helper(arr, num);
	return result ? result : -1; // return -1 if the number was not found
};
