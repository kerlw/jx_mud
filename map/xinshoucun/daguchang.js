var fm = require('framework');

var daguchang = fm.extend(function() {
	if (!(this instanceof daguchang))
		return new daguchang();
	
	this.name = "打谷场";
	this.desc = "位于小村落南部地势较高的一处平地，被村民们用作打谷场，晾晒着各种收获，因此也招来山里的老鼠光顾，据说偶尔也有野猪来凑热闹。";
	this.exits = {
		"north" : "xinshoucun/xiaolu4"
	};
	this.objs = {
		"xinshoucun/npc/rat" : 6
	};
	
	this.setup();
	this.set_resetable({"timeout" : 60, "repeat" : 1});
}, fm.ROOM);

daguchang.prototype.reset = function() {
	this.base.prototype.reset.apply(this, arguments);

	var boarid = "xinshoucun/npc/boar#0";
	if (this.contains[boarid]) {
		if (FUNCTIONS.random(10) >= 6) {
			var boar = this.contains[boarid];
			FUNCTIONS.destruct(boar);
			FUNCTIONS.tell_room(this, "\n$(YEL)野猪摇摇摆摆的跑远了……$NOR");
		}
		return;
	}
	
	if (FUNCTIONS.random(10) >= 6) {
		var boar = FUNCTIONS.create_obj("xinshoucun/npc/boar", boarid);
		boar.move_to(this);
		FUNCTIONS.tell_room(this, "\n$(YEL)一只野猪摇摇摆摆的过来了，小心，轻易别招惹它!!$NOR");
	}
}

module.exports = daguchang;

