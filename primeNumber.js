const isPrime = (num = 0) => {
	if (num === 2) return true
	if (!Number.isInteger(num) || num < 2 || !(num % 2)) return false

	for (let i = 3; i <= Math.sqrt(num); i++, i++) {
		if (num % i === 0) return
	}
	return true
}

console.log(isPrime(20))
