var fm = require('framework');

var shaoji = fm.extend(function() {
	if (!(this instanceof shaoji))
		return new shaoji();
	
	this.name = "烧鸡";
	this.desc = "一只香喷喷的烧鸡，外皮焦黄光亮，看起来非常好吃的样子。";
	this.unit = "只";
	this.value = 100;

}, fm.ITEM);

shaoji.prototype.do_eat = function() {
	//Auto generated code
}

module.exports = shaoji;