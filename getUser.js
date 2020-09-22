function getUsernames(threshold) {
	const https = require('https')
	const url = 'https://jsonmock.hackerrank.com/api/article_users'

	return https.get(`${url}?page=1`, (res) => {
		res.setEncoding('utf8')
		let body = ''
		const arr = []
		res.on('data', (data) => {
			body += data
		})

		res.on('end', () => {
			body = JSON.parse(body).data

			return Array.from(
				body
					.filter((user) => {
						return user.submission_count > threshold
					})
					.map((user) => {
						return user.username
					})
			)
		})
		console.log('data stream ', arr)
	})
}

console.log(getUsernames(10))
