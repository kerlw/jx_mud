var fm = require('framework'),
	path = require('path');

var create_obj = function(pathname, id) {
	var ctor = require(path.join(DATA_PATH, pathname));
	var ret = new ctor();
	
	if (id)
		ret.id = id;
	
	return ret;
}

module.exports = create_obj;