(function(r) {
	function refresh_newbie(who) {
		who.eff_vitality = who.max_vitality;
		who.vitality = who.max_vitality;
		FUNCTIONS.message_vision('\n$(HIY)一道金色光芒罩住了$N的全身上下，"嗖"的一声，$N就突然消失了……$NOR\n', who);
		
		who.set_tmp('newbie_refresh', 1);
		who.move_to(_objs.rooms['xinshoucun/cunzhongyang']);
		return 1;
	}
	
	_daemons.chard.register_handle('in_xinshoucun', 'unconcious', refresh_newbie);
	_daemons.chard.register_handle('in_xinshoucun', 'die', refresh_newbie);
	
})(require);