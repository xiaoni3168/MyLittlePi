console.log('this is a javascript file of pi2.html');
var getBDY = function() {
	var target = $(event.target);
	var href = target.parent().find('a').get(0).href;
	$.getJSON('./js/bdy.json', function(data) {
		var body = document.body;
		var bdy = document.createElement('div');
		var bdyClose = document.createElement('div');
		var code = document.createElement('div');
		bdyClose.innerHTML = '&times;';
		code.innerHTML = data[href];
		$(bdyClose).click(function() {
			$(bdy).addClass('fadeOutDown');
			setTimeout(function() {
				bdy.remove();
			}, 1000);
		});
		$(bdy).addClass('animated rubberBand');
		$(bdy).addClass('bdy');
		$(bdyClose).addClass('bdy-close');
		$(code).addClass('bdy-code');
		bdy.appendChild(bdyClose);
		bdy.appendChild(code);
		body.appendChild(bdy);
	});
}
var testAni = function() {
	var body = document.body;
	var bdy = document.createElement('div');
	var bdyClose = document.createElement('div');
	var code = document.createElement('div');
	bdyClose.innerHTML = '&times;';
	code.innerHTML = 'hc78';
	$(bdyClose).click(function() {
		$(bdy).addClass('fadeOutDown');
		setTimeout(function() {
			bdy.remove();
		}, 1000);
	});
	$(bdy).addClass('animated rubberBand');
	$(bdy).addClass('bdy');
	$(bdyClose).addClass('bdy-close');
	$(code).addClass('bdy-code');
	bdy.appendChild(bdyClose);
	bdy.appendChild(code);
	body.appendChild(bdy);
}