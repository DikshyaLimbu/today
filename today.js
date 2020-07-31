function now(argument) {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	var ampm= (h>12)?"AM":PM;
	console.log(h+":"+m+":"+s+ampm);
}