var run = function() {

	// Navbar visibility
	$('.navbar').hide();
	$(window).scroll(function() {
		if($(this).scrollTop() > $(window).height()) {
			$('.navbar').fadeIn();
		} else {
			$('.navbar').fadeOut();
		}
	});

	// // greeting typewriter

	// var text = 'HELLO WORLD! I\'M JESSICA.';
	// var speed = 100;
	// function typeWriter() {
	// 	if(i < text.length) {
	// 		document.getElementById("custom-greeting").innerHTML += text.charAt(i);
	// 		i++;
	// 		setTimeout(typeWriter, speed);
	// 	}
	// }

	// Typewriter
	var element = document.getElementsByClassName('typewriter')[0];
	var writeArray = JSON.parse($(element).attr('data-type'));
	var arrayPosition = 0;
	var typeSpeed = 0;
	var txt = '';
	var isDeleting = false;

	function typeWriter() {
		var message = writeArray[arrayPosition];

		if(isDeleting) { // substrings the output message to write or delete
			txt = message.substring(0, txt.length-1);
			typeSpeed = 150;
		} else {
			txt = message.substring(0, txt.length+1);
		}

		element.innerHTML = txt; // writes output message to HTML

		if(!isDeleting && txt === message) { // sets to delete once full message has been displayed
			isDeleting = true;
			typeSpeed = 400;
		} else if (isDeleting && txt === '') { // sets to write the next message once the previous has been completely deleted
			isDeleting = false;
			arrayPosition++;
		}

		if(arrayPosition >= writeArray.length) {
			arrayPosition = 0;
		}

		setTimeout(typeWriter, typeSpeed);
	}

	typeWriter();


	// Smooth scrolling when clicking links
	function scrollTo(section) {
		var tag = $("a[name='" +section+ "']");
		$('html, body').animate({scrollTop: tag.offset().top}, 'slow');
	}

	$(".scroll-to").on('click', function() {
		var section = $(this).attr('data-link');
		scrollTo(section);
	});

	var iconArray = document.getElementsByClassName('skill-badge');
	for(var i=0; i<iconArray.length; i++) {
		var icon = $(iconArray[i]).attr('data-type');
		iconArray[i].innerHTML = "<span class=\"skill-icon " +icon+ "\"></span> " +icon;
	}
};

$(document).ready(run());