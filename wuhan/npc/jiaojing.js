var fm = require('framework');

var jiaojing = fm.extend(function() {
	if (!(this instanceof jiaojing))
		return new jiaojing();
	
	this.name = "交警（老大）";
	this.skills = {
			dodge : {
				lv : 10
			},
			parry : {
				lv : 10
			}
	}
	this.desc="收保护费的老大，口头禅是：“以XX的名义，今天该交了。否则9出13进，你懂的……”";
	this.str = 30;
	this.con  = 30;
	this.str = 30;
	this.cor = 30;
}, fm.NPC);

module.exports = jiaojing;

