var fm = require('framework'),
	random = FUNCTIONS.random;

var bing = fm.extend(function() {
	if (!(this instanceof bing))
		return new bing();
	
	this.name = "官兵";
	this.desc = "虽然官兵的武艺不能和武林人士相比，可是他们讲究的是人多力量大。";
	this.age = 22 + random(33);
	this.gender = "男性";
	this.attitude = "peaceful";
	
    this.str = 15 + random(5);
    this.dex = 15 + random(5);
    this.con = 15 + random(5);
    this.int = 10 + random(5);
    
    this.equip_skill("unarmed", 40);
    this.equip_skill("dodge", 40);
    this.equip_skill("parry", 40);
    this.equip_skill("blade", 40);
    this.equip_skill("force", 40);
    
    this.setup_char();
	
}, fm.NPC);

module.exports = bing;