var fm = require('framework');

var laocunzhang = fm.extend(function() {
	this.name = "老村长";
	this.desc = ""
	this.quests = {
		kill_rat : {
			key : "kill_rat",
			target : "xingshoucun/npc/boar",
			desc : "村子南边的打谷场上是村民们晒谷子的地方，经常有老鼠光顾，请帮助村民们捕杀$(HIR) $count$ $NOR只老鼠吧。",
			type : "kill",
			count : 4,
			reward : {
 				martial_exp : 40,
				social_exp : 40
			}
		}
	}
	this.add_inquiry("kill_boar", "帮助捕杀老鼠", this.inquiry_kill_boar);
	
	_daemons.questd.setup_publisher(this);
}, fm.NPC);

laocunzhang.prototype.visiable_inquiry = function(id, who) {
	if (who && who.is_player())
		return 1;
	return 0;
}

laocunzhang.prototype.inquiry_kill_boar = function(who) {
	_daemons.questd.accept_quest(this, who, this.quests['kill_rat']);
}

module.exports = laocunzhang;