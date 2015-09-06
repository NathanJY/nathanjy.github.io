$(document).ready(function() {

	var form = '.email-form';
	var $form = $(form);

	// Form submission
	$form.submit(function(event) {

		// Act on form submission
		$.ajax({
		    url: '//formspree.io/hello@nathanyat.es', 
		    method: 'POST',
		    data: $form.serialize(),
		    dataType: 'json',
		    success: function(data) {
               alert(data);
           	},
           	error: function(data) {
               alert(data);
           	}
		});
	});

	return false;
});