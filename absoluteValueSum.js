const absoluteValueSum = (N = []) => {
	// const isEven = N.length % 2 === 0
	// return isEven ? N[N.length / 2 - 1] : N[(N.length - 1) / 2]
	let right = N.length - 1
	let left = 0
	let middle = Math.floor((left + right) / 2)
	console.log(N[middle])
}

console.log(absoluteValueSum([2, 4, 7]))
console.log(absoluteValueSum([2, 4, 7, 6]))
console.log(absoluteValueSum([2, 4, 7, 6, 6]))

console.log(absoluteValueSum([2, 4, 7, 9, 6, 6, 8]))
