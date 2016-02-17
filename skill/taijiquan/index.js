var fm = require('framework');
var skill_fun = require('../../fun/skill_fun.js');

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

	jiali=0;	// 内功伤害

	// 外功伤害= (层级+基本等级/4+武学修养/4 + 武器熟练等级/4)* combat伤害/combat系数 * 2 * stats绝招伤害加成
	zhaoshichengji = Math.ceil( use_lv / 10);	// 层级
	combatratio = skill_fun.combat.ratio('taijiquan', use_lv);	// combat系数
	combat = skill_fun.combat.damage('taijiquan', use_lv);	// combat伤害
	zhaoshi = ( zhaoshichengji + use_lv / 4 + 0 + 0 ) * ( combat / combatratio ) * 2 * 1;
	wuqi = 0;	// 武器伤害
	
	// 总伤害 = 内功伤害 + 外功伤害 + 武器伤害
	other_vitality = Math.ceil(jiali + zhaoshi + wuqi);
	
	return {'vitality' : other_vitality};
}

module.exports = taijiquan;