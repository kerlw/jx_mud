var fm = require('framework');

var laocunzhang = fm.extend(function() {
	this.name = "老村长";
	this.desc = ""
	this.quests = {
		first : {
			target : "xingshoucun/npc/boar",
			desc : "村南山脚的田地里经常有山里的野猪出没，请帮助村民们猎杀#s(HIR)$count$#e(HIR)只野猪吧。",
			type : "kill",
			count : 4,
			reward : {
				martial_exp : 40,
				social_exp : 40
			}
		}
	}
	this.add_inquiry("kill_boar", "帮助猎杀野猪", this.kill_boar_quest);
}, fm.NPC);

laocunzhang.prototype.visiable_inquiry = function(id, who) {
	if (who && who.is_player())
		return 1;
	return 0;
}

laocunzhang.prototype.kill_boar_quest = function(who) {
	var desc = _daemons.questd.quest_desc(this.quests['first'], who);
	FUNCTIONS.message_vision("$N对$n说到：" + desc, this, who);
}

module.exports = laocunzhang;