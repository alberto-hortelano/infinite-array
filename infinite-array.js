
/** 
 * Infinite array
 */
function inifiniteArray(length, original) {
	var obj = new Array();
	obj.length = length;

	if (original !== undefined) {
		obj.original = original;
	} else {
		obj.original = obj;
	}

	return new Proxy(obj, {
	    get(target,name) {
		if (target.hasOwnProperty(name)) {
			return target[name];
		} else if (!randomIntFromInterval(0,3)) {
			var newLength = randomIntFromInterval(1,length);
				var ret = inifiniteArray(newLength, obj.original);
				return ret;
			} else {
				var n = randomIntFromInterval(1,length);
				return n;
			}
	    } 
	});
}
inifiniteArray(10);
