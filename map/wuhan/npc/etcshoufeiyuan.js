var fm = require('framework');

var etcshoufeiyuan = fm.extend(function() {
	if (!(this instanceof etcshoufeiyuan))
		return new etcshoufeiyuan();
	
	this.name = "ETC收费员";
	this.skills = {
			dodge : {
				lv : 100
			},
			parry : {
				lv : 100
			}
	}
	this.desc="自古税吏就是凶残的角色，何况是现代科技武装到牙齿的收费员？！！乖乖交钱吧~~~~~，你是不可能战胜的。";
	this.str = 30;
	this.con = 30;
	this.str = 30;
	this.cor = 30;
	this.lck = 30;

	this.vitality = 900;
	this.eff_vitality = 900;	
	this.max_vitality = 900; 
	
	this.stamina = 900;
	this.eff_stamina = 900;
	this.max_stamina = 900;
	
	this.force = 900;
	this.eff_force = 900;
	this.max_force = 900;
}, fm.NPC);

module.exports = etcshoufeiyuan;

