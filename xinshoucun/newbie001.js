var fm = require('framework');

var newbie001 = fm.extend(function() {
	if (!(this instanceof newbie001))
		return new newbie001();

	this.name = "世界入口",
	this.desc = "这里云雾缭绕仿如仙境，却又缺乏光线，什么也看不清，从东方隐隐约约传来人声。",
	this.set_flag("no_fight", 1);
	this.exits = {
		"north" : "wuhan/baihudajie001",
		"east" : "xinshoucun/newbie002"
	};
	
	this.setup();
}, fm.ROOM);

newbie001.prototype.setup_commands = function(who) {
	if (!who || !who.is_player())
		return;
	
	who.set_flag('in_xinshoucun', 1);
//	who.save();
}

module.exports = newbie001;
