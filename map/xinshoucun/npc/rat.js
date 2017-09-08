var fm = require('framework');

var rat = fm.extend(function() {
	if (!(this instanceof rat))
		return new rat();
	
	this.name = "硕鼠";
	this.desc = "肥肥胖胖的，个头超过了兔子，哪里还像一只老鼠。";
	
	this.str = 1;
	this.con = 1;
	this.cor = 1;
	
	this.setup_char();
}, fm.ANIMAL);

module.exports = rat;