const https = require('https')
const url = 'https://jsonmock.hackerrank.com/api/article_users'

function getUsernames(threshold) {
	const data = https.get(url, (res) => {
		res.setEncoding('utf8')
		let body = ''
		res.on('data', (data) => {
			body += data
		})
		res.on('end', () => {
			body = JSON.parse(body).data
			console.log(body)
		})
	})
}

console.log(getUsernames(10))
