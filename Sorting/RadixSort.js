function getDigit(num, position) {
	// get the digit in a specified position within an integer
	num = String(num);
	return position + 1 > num.length ? 0 : Number(num[num.length - 1 - position]);
}

function digitCount(num) {
	// get the number of digits in an integer
	num = String(parseInt(num));
	return num.length;
}

function mostDigits(nums) {
	// get the length of the number with the most digits in an array of numbers
	if (!nums.length) return 0;
	let max = Math.max(...nums);
	return digitCount(max);
}

function radixSort(arr) {
	const mostNoOfDigits = mostDigits(arr);

	for (let digitPos = 0; digitPos < mostNoOfDigits; digitPos++) {
		const buckets = Array.from({ length: 10 }, () => []);

		for (let num of arr) {
			const digit = getDigit(num, digitPos); // digit determines the bucket number
			buckets[digit].push(num);
		}

		arr = [].concat(...buckets);
	}

	return arr;
}
