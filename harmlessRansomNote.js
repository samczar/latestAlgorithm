const harmlessRansomNote = (noteText, magazineText) => {
	var noteTextArray = ['']
	var magazineArray = ['']

	for (let index = 0; index < noteText.length; index++) {
		if (noteText[index] !== ' ') {
			noteTextArray[noteTextArray.length - 1] += noteText[index]
		} else {
			noteTextArray.push('')
		}
	}

	for (let j = 0; j < magazineText.length; j++) {
		if (magazine[j] !== ' ') {
			magazineArray[magazineArray.length - 1] += magazine[j]
		} else {
			magazineArray.push('')
		}
	}

	var magazineObj = {}
	var word

	for (let noteWord = 0; noteWord < magazineArray.length; noteWord++) {
		word = magazineArray[noteWord]
		magazineObj[word] = magazineObj[word] ? magazineObj[word] + 1 : 1
	}
	// console.log(magazineObj)

	var noteIsPossible = true

	for (let i = 0; i < noteTextArray.length; i++) {
		console.log(magazineObj)
		if (noteTextArray[i] == magazineObj[word]) {
			magazineObj[word]--
			if (magazineObj[word == 0]) {
				noteIsPossible = false
			}
		} else {
			noteIsPossible = false
		}
	}

	return noteIsPossible
}

const note = 'I am am a great guy'
const magazine = 'and am the president is doing a great job and I am pleased'

harmlessRansomNote(note, magazine)
