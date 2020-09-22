const twoDigits = (N = 0) => {
	return N.toString()
		.split('')
		.reduce((total, num) => {
			return parseInt(total) + parseInt(num)
		}, 0)
}
console.log(twoDigits(131))
