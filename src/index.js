if (!global || !global._babelPolyfill) {
    require('babel-polyfill')
}
var GoogleAuthUI = require('./components/Login')
var Footer = require('./components/Footer')

module.exports = {
	GoogleAuthUI: GoogleAuthUI.default,
	Footer: Footer.default,
}