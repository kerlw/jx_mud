var fm = require('framework');

var heixiaoer = fm.extend(function() {
	if (!(this instanceof heixiaoer))
		return new heixiaoer();
	
	this.name = "黑小二";
	this.skills = {
			dodge : {
				lv : 100
			},
			parry : {
				lv : 100
			}
	}
	this.desc="菲律宾移民，长得没有掌柜黑。";
	this.str = 10;
	this.con = 10;
	this.str = 10;
}, fm.NPC);

module.exports = heixiaoer;

