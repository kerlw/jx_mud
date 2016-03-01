var fm = require('framework'),
	random_name = FUNCTIONS.random_name,
	random = FUNCTIONS.random;

var bing = fm.extend(function() {
	if (!(this instanceof bing))
		return new bing();
	
	console.log("create yayi " + typeof(random_name));
	this.name = random_name(1);
	this.desc = "虽然官兵的武艺不能和武林人士相比，可是他们讲究的是人多力量大。";
	this.age = 22 + random(33);
	this.gender = "male";
	this.race = "human";
	this.attitude = "peaceful";
	
    this.str = 15 + random(5);
    this.dex = 15 + random(5);
    this.con = 15 + random(5);
    this.int = 10 + random(5);
    
    this.equip_skill("unarmed", 30);
    this.equip_skill("dodge", 30);
    this.equip_skill("parry", 20);
    this.equip_skill("force", 20);
    
    this.setup_char();
	
}, fm.NPC);

module.exports = bing;