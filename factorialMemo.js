const factorialMemo = (index, cache) => {
	cache = cache || []
	return cache[index]
		? cache[index]
		: index < 1
		? 1
		: factorialMemo(index - 1, cache) * index
}

console.log(factorialMemo(5))
