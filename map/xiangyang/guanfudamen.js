var fm = require('framework');

var guanfudamen = fm.extend(function() {
	if (!(this instanceof guanfudamen))
		return new guanfudamen();
	
	this.name = "官府大门";
	this.desc = "这里是襄阳城的官衙正门，门口通常有两位衙役站岗。";
	
	this.objs = {
			"npc/guanfu/yayi" : 2
	}
	
	this.exits = {
			"south" : "xiangyang/nandajie04"
	}
	
	this.setup();

}, fm.ROOM);

guanfudamen.prototype.foo = function() {
	//Auto generated code
}

module.exports = guanfudamen;