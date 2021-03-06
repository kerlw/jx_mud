var fm = require('framework');

var chengnankezhan = fm.extend(function() {
	if (!(this instanceof chengnankezhan))
		return new chengnankezhan();
	this.name = "城南客栈";
	this.desc = "这里是一间位于襄阳城内南门附近的客栈，南方过来的商人多会途便利而选择在这里打尖。";
	
	this.set_flag('no_fight', 1);
	this.exits = { "west" : "xiangyang/nandajie01" };

	this.objs = {
		'xiangyang/npc/waiter' : 1
	};
	this.setup();
}, fm.ROOM);

chengnankezhan.prototype.setup_commands = function(who) {
	if (who.query_tmp('entering_world')) {
		FUNCTIONS.tell_object(who, "$(YEL)\n你骤然惊醒，却原来是在客栈吃饭，等上菜等得睡着了…$NOR\n");
		who.del_tmp('entering_world');
	}
}

module.exports = chengnankezhan;