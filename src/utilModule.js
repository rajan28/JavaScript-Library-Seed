var MyFirstLib = (function(parent) {
	'use strict';

	var my = parent.util = parent.util || {};

	my.utilFunc = function(a,b,c) {
		return a+b-c;
	}

	my.anotherUtilFunc = function(a,b,c,d) {
		return a*b+c-d;
	}

	return parent;

})(myFirstLib || {});