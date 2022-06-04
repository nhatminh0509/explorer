const routes = require('next-routes')
module.exports = routes()
.add('/', 'Screens/Home')
.add('/tx/:hash', 'Screens/Home')