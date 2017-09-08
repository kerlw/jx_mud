var fm = require('framework');

var laoyu = fm.extend(function() {
	if (!(this instanceof laoyu))
		return new laoyu();
	this.name = "老妪";
	this.desc = "满头白发，脸上数不清的皱纹，看上去总是眯着眼睛打盹。";
	this.quests = {
		helpme : {
			desc : "老身我孤零零一个人，亏得有大家帮忙才活得下去，",//TODO ...
			type : "action",
			reward : {
				social_exp : 10
			}
		}
	};
	this.add_inquiry("helpme", "帮忙", this.inquiry_helpme);
	
	this.set_tmp('lazy_init', 1);
}, fm.NPC);

laoyu.prototype.lazy_init = function() {
	_daemons.questd.setup_publisher(this);	
}

laoyu.prototype.setup_commands = function(who) {
	if (FUNCTIONS.random(10) > 6) {
		FUNCTIONS.message_vision("$(HIY)$N对$n叫到：当心点!!看着点脚下，别踩到我家的小鸡。$NOR", this, who);
	}
}

laoyu.prototype.visiable_inquiry = function(id, who) {
	
}

laoyu.prototype.inquiry_helpme = function(who) {
	
}

module.exports = laoyu;