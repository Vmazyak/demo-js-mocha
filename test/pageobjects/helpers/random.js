exports.randomValue = function(prefix = ''){
	return prefix + Math.random().toString(36).substring(2, 9);
}