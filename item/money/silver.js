var fm = require('framework');

var silver = fm.extend(function() {
	if (!(this instanceof silver))
		return new silver();
	
	this.name = "白银";
	this.desc = "白花花的银子，人见人爱的银子。";
	this.unit = "些";
	this.base_value = 100;
	this.base_unit = "两";
	this.base_weight = 50;
}, _std.items.money);

module.exports = silver;