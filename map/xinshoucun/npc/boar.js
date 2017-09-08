var fm = require('framework');

var boar = fm.extend(function() {
	if (!(this instanceof boar))
		return new boar();
	
	this.name = "野猪";
	this.desc = "皮糙肉厚的典型，大家都说轻易别招惹它！";
	
	this.str = 25;
	this.con = 40;
	this.equip_skill('dodge', 40);
	this.equip_skill('unarmed', 40);
	
	this.setup_char();
}, fm.ANIMAL);

module.exports = boar;