// [5,3,6,2,4]

const median = (arry) => {
	const sorted = arry.sort()
	console.log(sorted.length)
	console.log(sorted)
	if (sorted.length % 2 === 0) {
		return sorted[sorted.length / 2 - 1]
	} else {
		return sorted[Math.floor(sorted.length / 2)]
	}
}

num = [5, 3, 2, 4]
console.log(median(num))

const match = (num) => {
	for (let i = 0; i < num * 2; i += 2) {
		console.log(i)
		console.log(Math.floor(i / 2))
		console.log(num - Math.floor(i / 2))
	}
}
console.log(Math.pow(2, 4))
console.log(Math.log2(16))
console.log(match(8))
