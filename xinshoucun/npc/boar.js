var fm = require('framework');

var boar = fm.extend(function() {
	if (!(this instanceof boar))
		return new boar();
	
	this.name = "野猪";
	this.desc = "";
}, fm.ANIMAL);

module.exports = boar;