var MyFirstLib = (function(parent) {
	'use strict';

	var my = parent;

	my.firstFunc = function(a) {
		return a;
	}

	return parent;

})(myFirstLib || {});

// Delete this module (and anotherModule, utilModule)
// once you feel comfortable with its structure.