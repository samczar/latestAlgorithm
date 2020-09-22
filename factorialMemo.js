const factorialMemo = (index, cache) => {
	cache = cache || []
	return cache[index]
		? cache[index]
		: index < 1
		? 1
		: factorialMemo(index - 1, cache) * index
}

console.log(factorialMemo(5))

const fib = (num, cache) => {
	cache = cache || []

	if (cache[num]) {
		return cache[num]
	}

	if (num < 1) {
		return 1
	}
	return (cache[num] = fib(num - 1, cache) + fib(num - 2, cache))
}

console.log(fib(500))
