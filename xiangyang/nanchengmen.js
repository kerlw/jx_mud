var fm = require('framework');

var nanchengmen = fm.extend(function() {
	if (!(this instanceof nanchengmen))
		return new nanchengmen();
	
	this.name = "南城门";
	this.desc = "这里是襄阳城的南城门，一条官道通向湖南，城门口正聚集着一些平民百姓在看城墙上告示栏中的告示。";
	
	this.objs = {
		"npc/guanfu/wujiang" : 1,
		"npc/guanfu/bing" : 2
	};
	
	this.add_action("gaoshi", "看告示", this.action_gaoshi);

}, fm.ROOM);

nanchengmen.prototype.action_gaoshi = function() {
	//TODO 
	FUNCTIONS.tell_object("告示栏中的告示并没有什么有价值的信息");
}

module.exports = nanchengmen;