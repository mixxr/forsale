(function ($) {
	console.log("titles loaded");
	// utility function to check form data
	var titles = [
    "forsale-bkt, For Sale",
    "pasticceria, Pasticceria Sana",
    "certificazioni-esg, Certificazioni ESG",
    "digitalposture, Digital Posture",
    "digital-posture, Digital Posture",
	"digital-governance, Digital Governance"	
  ];

	$(document).ready(function () {
    let hn = window.location.hostname;
    console.log(hn);
    titles.forEach( (t) => {
      var tt = t.split(",");
      if (hn.startsWith(tt[0])) {
        console.log("found", tt[0]);
        document.title = tt[1].trim();
		$('h1').text("The Domain "+tt[1].trim()+" is for SALE");
      }
    });
  });		
})(jQuery);

(function ($) {
	console.log("main.js loaded");
	// utility function to check form data
	var checkForm = function (dataString) {
		return true;
	}

	$(document).ready(function () {
		$("#submitButton").click(function (event) {
			event.preventDefault(); // Prevent default form submission
			try {
				var ele = document.getElementById("contactForm");
				if (!ele.checkValidity()) {
					ele.reportValidity();
					return;
				}
				let form = $("#contactForm");
				let url = form.attr('action');

				if (checkForm(form.serialize())) {
					$.ajax({
						type: "POST",
						url: url,
						headers: {
							"Authorization": "Bearer d1gitalP0stur3==="
						},
						data: form.serialize(), // Serialize form data
						success: function (data) {
							alert("Form Submitted Successfully");
							form.trigger("reset"); // Reset the form after successful submission
						},
						error: function (data) {
							alert("Error occurred while submitting the form");
						}
					});
				} else {
					event.preventDefault();
					console.log("Form validation failed");
				}
			} catch (err) {
				console.error("Error in submitButton click handler:", err);
				return false;
			}
		});
	});
})(jQuery);
