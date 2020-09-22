const Add = (param1, ...N) => {
	const restOperation = N.reduce((total, num) => {
		return total + num
	}, 0)
	return restOperation + param1
}
console.log(Add(32))
