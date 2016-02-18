var fm = require('framework');

var silver = fm.extend(function() {
	if (!(this instanceof silver))
		return new silver();
	
	this.name = "黄金";
	this.desc = "黄澄澄的金子，人见人爱的金子，啊～～金子！";
	this.unit = "些";
	this.base_value = 10000;
	this.base_unit = "锭";
	this.base_weight = 250;
}, _std.items.money);

module.exports = silver;