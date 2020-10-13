function getDigit(num, position) {
	num = String(num);
	return position + 1 > num.length ? 0 : Number(num[num.length - 1 - position]);
}
