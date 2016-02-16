var fm = require('framework');

var boar = fm.extend(function() {
	this.name = "野猪";
	this.desc = ""
}, fm.NPC);

module.exports = boar;