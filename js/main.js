$(document).ready(function() {

	var form = ".email-form";
	var $form = $(form);

	$form.submit(function(event) {
		$.ajax({
		    url: "//formspree.io/hello@nathanyat.es", 
		    method: "POST",
		    data: $form.serialize(),
		    dataType: "json"
		});
	});
});