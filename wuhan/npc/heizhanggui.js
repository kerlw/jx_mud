var fm = require('framework');

var heizhanggui = fm.extend(function() {
	if (!(this instanceof heizhanggui))
		return new heizhanggui();
	
	this.name = "黑掌柜";
	this.desc="非洲某酋长部落移民";
	this.str = 30;
	this.con = 30;
	this.str = 30;
	this.cor = 30;
	this.equip_skill('dodge', 100);
	this.equip_skill('parry', 100);
	this.equip_skill('unarmed', 100);
	this.equip_skill('taijiquan', 100);
	this.enable_skill('unarmed', 'taijiquan');
}, fm.NPC);

module.exports = heizhanggui;

