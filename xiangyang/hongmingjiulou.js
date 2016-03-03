var fm = require('framework');

var hongmingjiulou = fm.extend(function() {
	if (!(this instanceof hongmingjiulou))
		return new hongmingjiulou();
	
	this.name = "鸿鸣酒楼";
	this.desc = "襄阳城内最著名的酒楼，两道招牌菜远近闻名，也因此虽然地处襄阳城最冷清的西街，生意却仍然红火得不得了。";
		
	this.exits = {
		"east" : "xiangyang/xijie03",
		"north" : "xiangyang/xijie02"
	};
	
	this.setup();
}, fm.ROOM);

hongmingjiulou.prototype.action_call_waiter = function() {
	//Auto generated code
}

module.exports = hongmingjiulou;