var fm = require('framework');

var waiter = fm.extend(function() {
	if (!(this instanceof waiter))
		return new waiter();
	this.name = "店小二";
	this.desc = "油光满面，脸胖腰圆，一脸欠揍的样子。";
	
	this.setup_char();
}, _std.vender);

waiter.prototype.setup_commands = function(who) {
	if (who.query_tmp('entering_world')) {
		FUNCTIONS.message_vision("$N对$n赔笑道:这位客官您醒啦，不好意思，今天小店的厨房实在是忙不过来了，不如您在我这里点一些现成的熟食吧。", this, who);
	}
}

module.exports = waiter;