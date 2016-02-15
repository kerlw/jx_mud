var fm = require('framework'),
	random = FUNCTIONS.random;

var wujiang = fm.extend(function() {
	if (!(this instanceof wujiang))
		return new wujiang();
	
	this.name = "武将";
	this.desc = "他站在那里，的确有说不出的威风。";
	this.age = 28 + FUNCTIONS.random(35);
	this.gender = "男性";
	this.attitude = "peaceful";
	
    this.str = 25 + random(5);
    this.dex = 25 + random(5);
    this.con = 20 + random(5);
    this.int = 16 + random(5);
    
    this.equip_skill("unarmed", 60);
    this.equip_skill("dodge", 60);
    this.equip_skill("parry", 60);
    this.equip_skill("blade", 60);
    this.equip_skill("force", 60);
	
    this.setup_char();
    
}, fm.NPC);

module.exports = wujiang;
