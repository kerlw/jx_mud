var fm = require('framework');

var laocunzhang = fm.extend(function() {
	this.name = "老村长";
	this.desc = ""
	this.quests = {
		kill_rat : {
			key : "kill_rat",
			target : "xinshoucun/npc/rat",
			desc : "村子南边的打谷场上是村民们晒谷子的地方，经常有老鼠光顾，请帮助村民们捕杀$(HIR) $count$ $NOR只老鼠吧。",
			type : "kill",
			count : 2,
			reward : {
 				martial_exp : 10,
				social_exp : 10
			}
		}
	}
	this.add_inquiry("kill_rat", "帮助捕杀老鼠", this.inquiry_kill_rat);
	
	this.set_tmp('lazy_init', 1);
}, fm.NPC);

laocunzhang.prototype.lazy_init = function() {
	_daemons.questd.setup_publisher(this);	
}

laocunzhang.prototype.visiable_inquiry = function(id, who) {
	if (who && who.is_player())
		return 1;
	return 0;
}

laocunzhang.prototype.inquiry_kill_rat = function(who) {
	var quest = this.quests['kill_rat'];
	if (!who.quests[quest.id])
		return _daemons.questd.accept_quest(this, who, quest);
	
	var killed = who.quest_kills[quest.target];
	if (killed && killed.progress == killed.total) {
		FUNCTIONS.message_vision("$N对$n一拱手，十分客气的说道：感谢" + _daemons.rankd.query_respect(who) + 
				"，鼠害虽未根除，却也会越来越少吧。", this, who);
		return _daemons.questd.quest_reward(this, who, quest);
	} else {
		return FUNCTIONS.message_vision("$N对$n笑着说道：" + _daemons.rankd.query_respect(who) + 
				"请速速到南边的打谷场去帮助村民消灭鼠害吧。", this, who);
	}
}

module.exports = laocunzhang;