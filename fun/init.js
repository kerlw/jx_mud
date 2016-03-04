(function(r) {
	function refresh_newbie(who) {
		who.remove_all_killer();
		who.eff_vitality = who.max_vitality;
		who.vitality = who.max_vitality;
		
		var objs = FUNCTIONS.all_inventory(FUNCTIONS.environment(who)),
			CHAR = r('framework').CHAR;
		for (var id in objs) {
			var obj = objs[id];
			if (obj instanceof CHAR)
				obj.remove_killer(who);
		}
		FUNCTIONS.message_vision('\n$(HIY)一道金色光芒罩住了$N的全身上下，"嗖"的一声，$N就突然消失了……$NOR\n', who);
		
		who.set_tmp('newbie_refresh', 1);
		who.move_to(_objs.rooms['xinshoucun/cunzhongyang']);
		return 1;
	}
	
	_daemons.chard.register_handle('in_xinshoucun', 'unconcious', refresh_newbie);
	_daemons.chard.register_handle('in_xinshoucun', 'die', refresh_newbie);
	
	global.FUNCTIONS.random_name = r('./name.js');
	global.FUNCTIONS.create_obj = r('./create_obj.js');
	
})(require);