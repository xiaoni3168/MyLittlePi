console.log('this is a javascript file of pi2.html');
var getBDY = function() {
	var target = $(event.target);
	var href = target.parent().find('a').get(0).href;
	$.getJSON('./js/bdy.json', function(data) {
		console.log('run first');
		console.log(data);
	});
}
