var config = {
	url: './files/timesheet.txt',
	press: true,
	key: 122,
	fontSize: 9,
	opacity: 1,
	color: '000'
};

$(document).ready(function() {
	$.ajax({
		url: config.url,
		success: function(result) {
			$('.read').html('<span style="font-size: '+config.fontSize+'px; opacity: '+config.opacity+';color: #'+config.color+'">'+result.replace(/\n/g,'<br/>')+'</span>');
			$('.read').hide();
		},
		error: function() {
			console.log('Error');
		}
	});

	$(document).keypress(function(e) {
		if(e.which == config.key && config.press) {
			$('.read').toggle();
		}
	});
});