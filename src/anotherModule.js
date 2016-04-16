var MyFirstLib = (function(parent) {
	'use strict';

	var my = parent;

	my.anotherFunc = function(a,b) {
		return a+b;
	}

	return parent;

})(myFirstLib || {});