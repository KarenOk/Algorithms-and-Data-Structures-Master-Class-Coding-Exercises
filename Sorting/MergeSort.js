// Merge Sort

// Implement the merge sort algorithm. Given an array, this algorithm will sort the values in the array.
// The functions take 2 parameters: an array and an optional comparator function.

// The comparator function is a callback that will take two values from the array to be compared.
//   The function returns a negative value if the first value is less than the second, a positive value
// if the first value is greater than the second, and 0 if both values are equal.

// The default comparator you provide should assume that the two parameters are numbers and that we are
// sorting the values from smallest to largest.

// Here's some guidance for how merge sort should work:

// Break up the array into halves until you can compare one value with another
// Once you have smaller sorted arrays, merge those arrays with other sorted pairs until you are back at
//  the full length of the array
// Once the array has been merged back together, return the merged (and sorted!) array
// In order to implement this function, you'll also need to implement a merge function that takes in
// two sorted arrays and a comparator and returns a new sorted array. You implemented this function in the
// previous exercise, so copy and paste that code here.

// You can read more merge sort here:
// https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/intermediate-sorting-algorithms

// Examples

// mergeSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
// mergeSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
// mergeSort([1, 2, 3]); // [1, 2, 3]
// mergeSort([]);

// var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
// mergeSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

// var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

// function strComp(a, b) {
//   if (a < b) { return -1;}
//   else if (a > b) { return 1;}
//   return 0;
// }

// mergeSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

// var moarKittyData = [{
//   name: "LilBub",
//   age: 7
// }, {
//   name: "Garfield",
//   age: 40
// }, {
//   name: "Heathcliff",
//   age: 45
// }, {
//   name: "Blue",
//   age: 1
// }, {
//   name: "Grumpy",
//   age: 6
// }];

// function oldestToYoungest(a, b) {
//   return b.age - a.age;
// }

// mergeSort(moarKittyData, oldestToYoungest); // sorted by age in descending order

function merge(arr1, arr2, comparator) {
	const result = [];
	let p1 = 0,
		p2 = 0;

	while (p1 < arr1.length && p2 < arr2.length) {
		if (comparator(arr1[p1], arr2[p2]) < 0) {
			result.push(arr1[p1]);
			p1++;
		} else {
			result.push(arr2[p2]);
			p2++;
		}
	}
	return result.concat(arr1.slice(p1), arr2.slice(p2));
}

function mergeSort(arr, comparator) {
	if (typeof comparator !== "function") {
		comparator = (a, b) => a - b;
	}

	if (!arr.length) return [];
	if (arr.length === 1) return arr;

	const mid = Math.floor(arr.length / 2);
	const sortedArr1 = mergeSort(arr.slice(0, mid), comparator);
	const sortedArr2 = mergeSort(arr.slice(mid), comparator);

	return merge(sortedArr1, sortedArr2, comparator);
}

console.log(mergeSort([1, 3, 6, 7, 2, 4, 6]));
