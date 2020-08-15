const fibMemo = (index, cache) => {
	cache = cache || []
	cache[index] = cache[index]
		? cache[index]
		: index < 3
		? 1
		: fibMemo(index - 1, cache) + fibMemo(index - 2, cache)
	return cache[index]
}
console.log(fibMemo(100))
