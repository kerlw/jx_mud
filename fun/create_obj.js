var fm = require('framework'),
	path = require('path');

var create_obj = function(pathname, id) {
	var filepath = fm.find_file(DATA_PATH, pathname) || fm.find_file(MAP_PATH, pathname);
	if (!filepath) {
		throw pathname + ": file not found."
	}

	var ctor = require(filepath);
	var ret = new ctor();
	
	if (id)
		ret.id = id;
	
	return ret;
}

module.exports = create_obj;