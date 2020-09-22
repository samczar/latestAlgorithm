function solution(A = []) {
	if (A.length < 3) return 0
	// write your code in JavaScript (Node.js 8.9.4)
	A.sort((a, b) => a - b)
	console.log(A)
	let result = false
	for (let i = 0; i < A.length; i++) {
		console.log(A[i + 2], '-', A[i + 1], '<', A[i])
		if (A[i] >= 0 && A[i + 2] - A[i + 1] < [A[i]]) {
			console.log(true)
			result = true
			return
		} else {
			console.log(false)
			result = false
		}
	}

	return result
}
const arr = [10, 50, 5, 1]
// const arr = [10, 2, 5, 1, 8, 20]
console.log(solution(arr))

// function solution(A = []) {
// 	if (A.length < 3) return 0
// 	// write your code in JavaScript (Node.js 8.9.4)
// 	A.sort((a, b) => a - b)
// 	console.log(A)

// 	for (let i = 0; i < A.length; i++) {
// 		console.log(A[i], '>', A[i + 2], '-', A[i + 1])
// 		if (A[i] >= 0 && A[i] > A[i + 2] - A[i + 1]) {
// 			return 1
// 		}
// 	}
// 	return 0
// }

// const arr = [10, 50, 5, 1]
// // const arr = [10, 2, 5, 1, 8, 20]
// console.log(solution(arr))
