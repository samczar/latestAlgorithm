// const adjacentProduct = (N = []) => {
// 	let count = 0
// 	let result = 0
// 	for (let i = 0; i < N.length; i++) {
// 		if (N[i] * N[i + 1]) {
// 			let product = N[i] * N[i + 1]
// 			console.log('product ', product)
// 			result = Math.max(result, product)
// 			count++
// 		} else {
// 			count = 0
// 		}
// 	}
// 	return result
// }
// const arr = [-3, 3, 6, -2, -5, 7, 3]
// console.log(adjacentProduct(arr))

const adjacentProduct = (N = []) => {
	const largestProduct = N[0] * N[1]

	let product = 0

	for (let i = 1; i < N.length - 1; i++) {
		product = N[i] * N[i + 1]
	}

	return largestProduct < product ? product : largestProduct
}

const arr = [10, 3, 6, -2, -5, 7, 3]
console.log(adjacentProduct(arr))

test = (digit = []) => {
	let prev = 0
	let products = []
	for (let i = 0; i < digit.length; i++) {
		digit[i] * digit[i + 1] > prev
			? ((prev = digit[i] * digit[i + 1]), products.push(prev))
			: digit[i] * digit[i + 1]
	}

	return Math.max(...products)
}

const digit = [3, 6, -2, -5, 7, 3, 30]
console.log(test(digit))
