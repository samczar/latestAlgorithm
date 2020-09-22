const base62 = {
	charset: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
		''
	),
	encode: (integer) => {
		if (integer === 0) {
			return 0
		}
		let s = []
		while (integer > 0) {
			console.log(s)
			s = [base62.charset[integer % 62], ...s]
			console.log(s)
			integer = Math.floor(integer / 62)
			console.log(integer)
		}
		return s.join('')
	},
	decode: (char = '') => {
		return char
			.split('')
			.reverse()
			.reduce((prev, curr, i) => {
				return prev + base62.charset.indexOf(curr) * 62 ** i
			}, 0)
	},
}
console.log(base62.encode(883314))
console.log(base62.decode('3HN0'))
// const base62 = {
// 	charset: '0123456789abcdefghijklmnopqrstuvwxyvABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
// 		''
// 	),
// 	encode: (integer) => {
// 		if (integer === 0) {
// 			return 0
// 		}
// 		let s = []
// 		while (integer > 0) {
// 			console.log(s)
// 			s = [base62.charset[integer % 62], ...s]
// 			integer = Math.floor(integer / 62)
// 		}
// 		return s.join('')
// 	},
// 	decode: (char = '') => {
// 		return char
// 			.split('')
// 			.reverse()
// 			.reduce((prev, curr, i) => {
// 				return prev + base62.charset.indexOf(curr) * 62 ** i
// 			}, 0)
// 	},
// }
// console.log(base62.encode(883314))
// console.log(base62.decode('samczar.com'))
