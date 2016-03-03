var fm = require('framework');

var newbie001 = fm.extend(function() {
	if (!(this instanceof newbie001))
		return new newbie001();

	this.name = "云雾中",
	this.desc = "这里云雾缭绕仿如仙境，却又光线不足，什么也看不清楚，周围似乎总有人影晃动，从东方隐隐约约传来人声。",
	this.set("no_fight", 1);
	this.exits = {
		"east" : "xinshoucun/newbie002",
		"northwest" : "xinshoucun/newbie001",
		"southwest" : "xinshoucun/newbie001",
		"northeast" : "xinshoucun/newbie001",
		"southeast" : "xinshoucun/newbie001",
		"west" : "xinshoucun/newbie001",
		"north" : "xinshoucun/newbie001",
		"south" : "xinshoucun/newbie001"
	};
	
	this.setup();
}, fm.ROOM);

newbie001.prototype.setup_commands = function(who) {
	if (!who || !who.is_player())
		return;
	
	if (who.query('in_xinshoucun')) {
		FUNCTIONS.tell_object(who, "\n$(WHT)你在云雾中跌跌撞撞，艰难的前进...$NOR");
		var count = who.add_flag('newbie_fool', 1); 
		if (count > 3) {
			FUNCTIONS.tell_object(who, "\n$(YEL)你头顶传来一声轻叹：“真为你的智商感到捉急啊……”\n$接着，你的身体不受控制的向东飘去……$NOR");
			who.command('go', 'east');
		} else if (count > 2) {
			FUNCTIONS.tell_object(who, "\n$(HIG)你突然灵光一现，应该好好看看这里的描述。$NOR");
		}
	} else
		who.set('in_xinshoucun', 1);
}

module.exports = newbie001;
