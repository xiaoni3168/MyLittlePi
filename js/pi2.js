console.log('this is a javascript file of pi2.html');
var getBDY = function() {
	var target = $(event.target);
	var href = target.parent().find('a').get(0).href;
	$.getJSON('./bdy.json', function(data) {
		console.log(data);
	});
}