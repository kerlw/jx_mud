var fm = require('framework');

var xiaoyuan = fm.extend(function() {
	if (!(this instanceof xiaoyuan))
		return new xiaoyuan();
	
	this.name = "小院";
	this.desc = "简易的篱笆围着一间茅屋构成了这个小院，一只母鸡带着一群小鸡正在院里地上四处找食，茅屋外墙边放着一个旧水缸，一位老妪正坐在屋门口打盹。";
		
	this.set("no_fight", 1);
	this.objs = {
			"xinshoucun/npc/laoyu" : 1
	}
	this.exits = {
		"south" : "xinshoucun/xiaolu3"	
	};
	
	this.add_action("daoshui", "倒水", this.action_daoshui);

	this.setup();
}, fm.ROOM);

xiaoyuan.prototype.action_daoshui = function(who) {
	//Auto generated code
}

xiaoyuan.prototype.valid_action = function(who, action) {
	if (!who || !action || !this.actions || !this.actions[action])
		return 0;
	//TODO ...
	return 1;
}


module.exports = xiaoyuan;
