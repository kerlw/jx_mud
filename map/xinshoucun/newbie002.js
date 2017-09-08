var fm = require('framework');

var newbie002 = fm.extend(function() {
	if (!(this instanceof newbie002))
		return new newbie002();

	this.name = "云雾中",
	this.desc = "这里云雾稀薄了许多，光线充足，已然能够看清四周，东方不远处似有一个村落的样子，需要再走进些才能看得清楚。",
	this.set("no_fight", 1);
	this.exits = {
		"east" : "xinshoucun/shangu",
	};
	
	this.setup();
}, fm.ROOM);

newbie002.prototype.setup_commands = function(who) {
	if (!who || !who.is_player())
		return;
	
	FUNCTIONS.tell_object(who, "\n$(HIG)沿着光线来源的方向，你终于走出了迷雾$NOR");
	who.del_flag('newbie_fool');
}

module.exports = newbie002;