const alphabetSubSequence = (str = '') => {
	let splitStr = str.split('')
	let result = false

	let charcode = 0
	for (let i = 0; i < splitStr.length; i++) {
		if (splitStr[i].charCodeAt(0) > charcode) {
			charcode = splitStr[i].charCodeAt(0)
			result = true
			console.log('charcode ', charcode, 'Str ', splitStr[i].charCodeAt(0))
		} else {
			result = false
		}
	}

	return result
}
const str = 'ace'
const strs = 'efg'
// console.log(alphabetSubSequence(str))
console.log(alphabetSubSequence(strs))
