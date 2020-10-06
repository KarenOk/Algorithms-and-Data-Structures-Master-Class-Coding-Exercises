function merge(arr1, arr2, comparator) {
	if (typeof comparator !== "function") {
		comparator = (a, b) => a - b;
	}

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

merge([1, 3, 6, 7], [2, 4, 6]);
