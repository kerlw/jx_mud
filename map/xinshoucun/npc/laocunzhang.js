var fm = require('framework');

var laocunzhang = fm.extend(function() {
	this.name = "老村长";
	this.desc = "鹤发童颜，精神矍铄，一副仙风道骨的样子，穿上道袍的话估计都会认为他是神仙了。";
	this.quests = {
		kill_rat : {
			target : "xinshoucun/npc/rat",
			desc : "村子南边的打谷场上是村民们晒谷子的地方，经常有老鼠光顾，请帮助村民们捕杀$(HIR) $count$ $NOR只老鼠吧。",
			type : "kill",
			count : 2,
			reward : {
 				martial_exp : 10,
				social_exp : 10
			}
		}
	};
	this.add_inquiry("here", "这里", "$N对$n耐心的说道：我们的祖先多少年前迁徙到这里已经无从考证，这里依山傍水，与世无争，当真是一个世外桃源。");
	this.add_inquiry("kill_rat", "帮助捕杀老鼠", this.inquiry_kill_rat);
	this.add_inquiry("world", "世界", this.inquiry_world);
	
	this.set_tmp('lazy_init', 1);
}, fm.NPC);

laocunzhang.prototype.lazy_init = function() {
	_daemons.questd.setup_publisher(this);	
}

laocunzhang.prototype.setup_commands = function(who) {
	if (who.query_tmp('newbie_refresh')) {
		who.del_tmp('newbie_refresh');
		FUNCTIONS.message_vision("$N拍拍$n的肩膀鼓励到：别灰心，继续努力。", this, who);
	}
}

laocunzhang.prototype.visiable_inquiry = function(id, who) {
	if (!who || !who.is_player())
		return 0;
	
	if (id === 'kill_rat') {
		if (who.query_flag('q_kill_rat_done'))
			return 0;
		return 1;
	} else if (id === 'world') {
		if (who.query_flag('q_kill_rat_done'))
			return 1;
		return 0;
	}
	return 1;
}

laocunzhang.prototype.inquiry_kill_rat = function(who) {
	var quest = this.quests['kill_rat'];
	if (!who.quests[quest.id])
		return _daemons.questd.accept_quest(this, who, quest);
	
	if (who.query_flag('q_kill_rat_done'))
		return;
	
	var killed = who.quest_kills[quest.target];
	if (killed && killed.progress == killed.total) {
		FUNCTIONS.message_vision("$N对$n一拱手，十分客气的说道：感谢" + _daemons.rankd.query_respect(who) + 
				"，鼠害虽未根除，却也会越来越少吧。", this, who);
		_daemons.questd.quest_reward(this, who, quest);
		who.set_flag('q_kill_rat_done', 1);
		return;
	} else {
		return FUNCTIONS.message_vision("$N对$n笑着说道：" + _daemons.rankd.query_respect(who) + 
				"请速速到南边的打谷场去帮助村民消灭鼠害吧。", this, who);
	}
}

laocunzhang.prototype.inquiry_world = function(who) {
	FUNCTIONS.message_vision("$N对$n哈哈笑道：哈哈哈哈……我这就送你去大千世界见识一番吧。", this, who);
	FUNCTIONS.tell_object(who, "\n$(WHT)一道刺眼的白光让你不自觉的闭上了双眼，你只觉得天旋地转，似正坠入无底深渊般……$NOR");
	who.set_tmp('entering_world', 1);
	who.move_to(_objs.rooms['xiangyang/chengnankezhan']);
}

module.exports = laocunzhang;