require('dotenv/config')

module.exports = {
	client: {
		service: {
			url: process.env.VITE_SERVER_URL,
			skipSSLValidation: true
		}
	}
}
