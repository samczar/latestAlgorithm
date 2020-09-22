const factorial = (num, cache) => {
	// if (num < 1) return 1
	cache = cache || []

	if (cache[num]) {
		return cache[num]
	}
	if (num < 2) {
		return num
	}

	return (cache[num] = num * factorial(num - 1, cache))
}

console.log(factorial(200))
