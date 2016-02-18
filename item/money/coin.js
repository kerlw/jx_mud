var fm = require('framework');

var coin = fm.extend(function() {
	if (!(this instanceof coin))
		return new coin();
	
	this.name = "铜钱";
	this.desc = "这是流通中单位最小的货币，约要一百文铜钱才值得一两白银。";
	this.unit = "些";
	this.base_value = 1;
	this.base_unit = "文";
	this.base_weight = 5;
}, _std.items.money);

module.exports = coin;