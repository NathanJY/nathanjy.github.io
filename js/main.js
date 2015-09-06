$(document).ready(function() {

	var form = '.email-form';
	var $form = $(form);

	// Open form
	$('.contact-button').click(function(event) {
		$form.fadeIn(400);
		$('.contact-button').css('transform', 'translate3d(-142px,0,0)');
		$('.close-button').fadeIn(200);
		$('.overlay').fadeIn(200);
		$('.navbar-brand').css('opacity', '0.1');
	});

	// Close form
	$('.close-button, .overlay').click(function(event) {
		$form.fadeOut(400);
		$('.contact-button').css('transform', 'translate3d(0,0,0)');
		$('.close-button').fadeOut(200);
		$('.overlay').fadeOut(200);
		$('.navbar-brand').css('opacity', '1');
	});

	// Form submission
	$form.submit(function(event) {

		// Act on form submission
		$.ajax({
		    url: '//formspree.io/hello@aleksitappura.com', 
		    method: 'POST',
		    data: {
		    	message: $form.serialize()
		    },
		    dataType: 'json',
		    success: function() {
		    	// Add checkmark
				$('.contact-button').addClass('success');

				// Revert to default
				$form.fadeOut(400);
				$('.contact-button').css('transform', 'translate3d(0,0,0)');
				$('.close-button').fadeOut(200);
				$('.overlay').fadeOut(200);
				$('.navbar-brand').css('opacity', '1');

				// Clear form
				$form.find("input[type=email], textarea").val("");

				// Remove checkmark after two seconds
				setTimeout(function(){
					$('.contact-button').removeClass('success');
				}, 2000);
           	}
		});

		return false;
	});

});