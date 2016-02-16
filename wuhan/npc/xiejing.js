var fm = require('framework');

var xiejing = fm.extend(function() {
	if (!(this instanceof xiejing))
		return new xiejing();
	
	this.name = "协警（小喽啰）";
	this.skills = {
			dodge : {
				lv : 10
			},
			parry : {
				lv : 10
			}
	}
	this.desc="老大的小弟……";
	this.str = 10;
	this.con  = 10;
	this.str = 10;
	this.cor = 10;
}, fm.NPC);

module.exports = xiejing;

