const routes = require('next-routes')

module.exports = routes()
	.add('index')
	.add('channel', '/:slug.:id', 'channel') //route name, xxxxxx.id, destiny page
	.add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast')
