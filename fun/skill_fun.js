module.exports = skill_fun;

function skill_fun() {
	if (!(this instanceof skill_fun))
		return new skill_fun();
}

// combat系数
skill_fun.combat.ratio = function(skill, lv) {
	switch (Math.ceil( lv / 10)) {
		case 1:
		case 2:
		case 3:
			return 20;
		case 4:
		case 5:
		case 6:
			return 18;
		case 7:
		case 8:
		case 9:
			return 16;
		case 10:
			return 12;
		default:
			return 20;
	}
}

// combat伤害
skill_fun.combat.damage = function(skill, lv) {
	switch (Math.ceil( lv / 10)) {
		case 1:
			return 1;
		case 2:
			return 1.1;
		case 3:
			return 1.2;
		case 4:
			return 1.3;
		case 5:
			return 1.4;
		case 6:
			return 1.5;
		case 7:
			return 1.6;
		case 8:
			return 1.7;
		case 9:
			return 1.8;
		case 10:
			return 1.9;
		default:
			return 1;
	}
}
