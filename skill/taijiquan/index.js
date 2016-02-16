var fm = require('framework');

var taijiquan = fm.extend(function() {
	if (!(this instanceof taijiquan))
		return new taijiquan();
	
	this.name = 'taijiquan';
	this.base_type = 'unarmed';
}, fm.SKILL);

//taijiquan.prototype.valid_use = function(me, use_lv) {
//	
//}

taijiquan.prototype.action = function(me, use_lv, other) {
	if (!this.valid_use(me, use_lv))
		throw this.name + "(" + use_lv + ") could not be used by " + me.id;

	zhaoshichengji = Math.ceil( use_lv / 10);	// 层级
	switch (zhaoshichengji) {
	case 1:
		return '$N 使出 (' + zhaoshichengji + '层：' + use_lv + '级)「乾」字诀，拳招陡然花俏，似在作弄 $n ，却又暗伏后招！';
	case 2:
		return '$N 使出 (' + zhaoshichengji + '层：' + use_lv + '级)「坤」字诀，单拳缓缓击出，不偏不倚，虽是指向正中，拳力却将 $n 的周身笼住！';
	case 3:
		return '$N 使出 (' + zhaoshichengji + '层：' + use_lv + '级)「震」字诀，单拳缓缓击出，不偏不倚，虽是指向正中，拳力却将 $n 的周身笼住！';
	case 4:
		return '$N 使出 (' + zhaoshichengji + '层：' + use_lv + '级)「巽」字诀，单拳缓缓击出，不偏不倚，虽是指向正中，拳力却将 $n 的周身笼住！';
	case 5:
		return '$N 使出 (' + zhaoshichengji + '层：' + use_lv + '级)「离」字诀，单拳缓缓击出，不偏不倚，虽是指向正中，拳力却将 $n 的周身笼住！';
	case 6:
		return '$N 使出 (' + zhaoshichengji + '层：' + use_lv + '级)「艮」字诀，单拳缓缓击出，不偏不倚，虽是指向正中，拳力却将 $n 的周身笼住！';
	case 7:
		return '$N 使出 (' + zhaoshichengji + '层：' + use_lv + '级)「坎」字诀，单拳缓缓击出，不偏不倚，虽是指向正中，拳力却将 $n 的周身笼住！';
	case 8:
		return '$N 使出 (' + zhaoshichengji + '层：' + use_lv + '级)「兑」字诀，单拳缓缓击出，不偏不倚，虽是指向正中，拳力却将 $n 的周身笼住！';
	case 9:
		return '$N 使出 (' + zhaoshichengji + '层：' + use_lv + '级)四象';
	case 10:
		return '$N 使出 (' + zhaoshichengji + '层：' + use_lv + '级)两仪';
	default:
		return ' (' + zhaoshichengji + '层：' + use_lv + '级)搞毛啊！';	
	}
}

taijiquan.prototype.cost = function(me, use_lv) {
	return {'force': 10}; 
}

// 伤害计算
taijiquan.prototype.damage = function(me, use_lv, other) {
	if (!me.skills['taijiquan']) {
		return null;
	}
	// 内功伤害
	jiali=0;
	
	// 外功伤害= (层级+基本等级/4+武学修养/4 + 武器熟练等级/4)* combat伤害/combat系数 * 2 * stats绝招伤害加成
	zhaoshichengji = Math.ceil( use_lv / 10);	// 层级
	combatratio = 20;// combat系数
	switch (zhaoshichengji) {
		case 1:
		case 2:
		case 3:
			combatratio = 20; break;
		case 4:
		case 5:
		case 6:
			combatratio = 18; break;
		case 7:
		case 8:
		case 9:
			combatratio = 16; break;
		case 10:
			combatratio = 12; break;
	}

	//combat = 1 + ( ( zhaoshichengji - 1 ) / 10 ) * 1; // combat伤害
	combat = 0;
	switch (zhaoshichengji) {
		case 1:
			combat = 1; break;
		case 2:
			combat = 1.1; break;
		case 3:
			combat = 1.2; break;
		case 4:
			combat = 1.3; break;
		case 5:
			combat = 1.4; break;
		case 6:
			combat = 1.5; break;
		case 7:
			combat = 1.6; break;
		case 8:
			combat = 1.7; break;
		case 9:
			combat = 1.8; break;
		case 10:
			combat = 1.9; break;
	}

	zhaoshi = ( zhaoshichengji + use_lv / 4 + 0 + 0 ) * ( combat / combatratio ) * 2 * 1;
	
	// 武器伤害
	wuqi = 0;
	
	// 总伤害 = 内功伤害 + 外功伤害 + 武器伤害
	other_vitality = Math.ceil(jiali + zhaoshi + wuqi);
	
	return {'vitality' : other_vitality};
}

module.exports = taijiquan;