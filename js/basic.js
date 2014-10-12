$(document).ready(function() {
	$('.alink').click(function(event){
    	console.log('internal link clicked');
    	event.stopImmediatePropagation();
	});

});

function toDetail() {
	$.scrollTo( $('#detail'), 400 );
	return false;
}

function toMain() {
	$.scrollTo( $('#main'), 400 );
	return false;
}

function loadAbout() {
	$.scrollTo( $('#main'), 400 );
	$('#main').fadeOut('slow', function() {
		$('#main').css("background-image", "");  
		$('#logo').html('<img src="img/mologo.png">');
		$('#textbox').css('display', 'block');
		$('#textbox').html('<h1>PLAY WITH REALITY</h1><br /><h2>Completing case studies to ultimately create a collaborative working environment that realizes innovative, self-sustaining digital media projects.</h2><h3><em>drop us a note at <a class="alink" href="mailto:hello@mediaobjects.org">hello [at] mediaobjects [dot] org</a></em></h3>');
		$('#detail').html('<img src="img/team.jpg">');		
		$('#main').fadeIn('slow');
	});
}

function loadGravatron() {
	$.scrollTo( $('#main'), 400 );
	$('#main').fadeOut('slow', function() {
		$('#main').css("background-image", "url(img/gravatron_bg.jpg)"); 
		$('#logo').html('<img src="img/gravatron.png">');
	 	$('#detail').html('<div class="box"><img src="img/grav01.jpg"></div><div class="box"><img src="img/grav02.jpg"></div><div class="box"><img src="img/grav03.jpg"></div><div class="box"><img src="img/grav04.jpg"></div><div class="box"><img src="img/grav05.jpg"></div><div class="box"><img src="img/grav06.jpg"></div><div class="box"><img src="img/grav07.jpg"></div><div class="box"><img src="img/grav08.jpg"></div>');
	 	$('#detail').imagesLoaded( function(){
	 		console.log( "masonry" );
			$ ('#detail').masonry({
				itemSelector: '.box',
				isFitWidth: true				
			});
		});
		$('#detail').masonry( 'reloadItems' );
		$('#textbox').css('display', 'block');
		$('#textbox').html('<h1>MEASURE YOUR FUN</h1><br /><h2>Introducing GRAVATRON, a visually gorgeous data tracking app for extreme sports enthusiasts.</h2><h3>Learn more about <a class="alink" href="http://www.gravatron.com/" target="_blank">Gravatron</a>.</h3>');
        $('#main').fadeIn('slow');
    });
}

function loadSuperego() {
	$.scrollTo( $('#main'), 400 );
	$('#main').fadeOut('slow', function() {
	 	$('#main').css("background-image", "url(img/superego.jpg)"); 
		$('#logo').html('<img src="img/superego.png">');
	 	$('#detail').html('<div class="box"><img src="img/superego01.jpg"></div><div class="box"><img src="img/superego02.jpg"></div><div class="box"><img src="img/superego03.jpg"></div><div class="box"><img src="img/superego04.jpg"></div><div class="box"><img src="img/superego05.jpg"></div><div class="box"><img src="img/superego06.jpg"></div>');
	 	$('#detail').imagesLoaded( function(){
	 		console.log( "masonry" );
			$ ('#detail').masonry({
				itemSelector: '.box',
				isFitWidth: true				
			});
		});
		$('#detail').masonry( 'reloadItems' );
		$('#textbox').css('display', 'block');
		$('#textbox').html('<h1>LIVING PIXELS</h1><br /><h2>Introducing SUPEREGO+, a new way of controlling reality with your technology. Be a part of something bigger!</h2>');
        $('#main').fadeIn('slow');
    });
}

function loadOobe() {
	$.scrollTo( $('#main'), 400 );
	$('#main').fadeOut('slow', function() {
		$('#main').css('background-image', 'url(img/oobe.jpg)');
		$('#logo').html('<img src="img/oobe.png">');
		$('#textbox').css('display', 'block');
		$('#textbox').html('<h1>BE YOUR AVATAR</h1><br /><h2>Introducing OOBE, a console that takes immersive gaming to the next level. Put yourself within the game world!</h2>');
		$('#detail').html('<img src="img/oobe01.jpg">');
		$('#main').fadeIn('slow');
	});
}

function loadCucumber() {
	$.scrollTo( $('#main'), 400 );
	$('#main').fadeOut('slow', function() {
	 	$('#main').css("background-image", "url(img/cucumber.jpg)"); 
		$('#logo').html('<img src="img/cucumber.png">');
	 	$('#detail').html('<div class="box"><img src="img/cucumber01.jpg"></div><div class="box"><img src="img/cucumber02.jpg"></div><div class="box"><img src="img/cucumber03.jpg"></div><div class="box"><img src="img/cucumber04.jpg"></div><div class="box"><img src="img/cucumber05.jpg"></div>');
	 	$('#detail').imagesLoaded( function(){
	 		console.log( "masonry" );
			$ ('#detail').masonry({
				itemSelector: '.box',
				isFitWidth: true				
			});
		});
		$('#detail').masonry( 'reloadItems' );
		$('#textbox').css('display', 'block');
		$('#textbox').html('<h1>TELL YOUR STORY</h1><br /><h2>Introducing CUCUMBER, a digital storytelling platform. Turning consumers into producers.</h2><h3>Check out the <a class="alink" href="http://cucumber.iaep.de/snack/index.html" target="_blank">SNACK</a> and <a class="alink" href="http://cucumber.iaep.de/wine/index.html" target="_blank">WINE</a> prototypes.</h3>');
        $('#main').fadeIn('slow');
    });
}

function loadDeltainterrobang() {
	$.scrollTo( $('#main'), 400 );
	$('#main').fadeOut('slow', function() {
	 	$('#main').css("background-image", "url(img/delta.jpg)"); 
		$('#logo').html('<img src="img/cucumber.png">');
	 	$('#detail').html('<div class="box"><img src="img/delta01.png"></div><div class="box"><img src="img/delta02.png"></div><div class="box"><img src="img/delta03.png"></div><div class="box"><img src="img/delta04.png"></div><div class="box"><img src="img/delta05.png"></div><div class="box"><img src="img/delta07.png"></div><div class="box"><img src="img/delta07.png"></div><div class="box"><img src="img/delta08.png"></div><div class="box"><img src="img/delta09.png"></div><div class="box"><img src="img/delta10.png"></div>');
	 	$('#detail').imagesLoaded( function(){
	 		console.log( "masonry" );
			$ ('#detail').masonry({
				itemSelector: '.box',
				isFitWidth: true				
			});
		});
		$('#detail').masonry( 'reloadItems' );
		$('#textbox').css('display', 'block');
		$('#textbox').html('<h1>LEARN CREATIVELY</h1><br /><h2>Introducing DELTAINTERROBANG, a Windows Phone game designed to teach people about environmental issues and thinking out of the box.</h2>');
        $('#main').fadeIn('slow');
    });
}

function loadBlueroom() {
	$.scrollTo( $('#main'), 400 );
	$('#main').fadeOut('slow', function() {
	 	$('#main').css("background-image", "url(img/blueroom.jpg)"); 
		$('#logo').html('<img src="img/cucumber.png"></a>');
	 	$('#detail').html('<div class="box"><img src="img/blueroom01.jpg"></div><div class="box"><img src="img/blueroom02.jpg"></div><div class="box"><img src="img/blueroom03.jpg"></div><div class="box"><img src="img/blueroom04.jpg"></div><div class="box"><img src="img/blueroom05.jpg"></div>');
	 	$('#detail').imagesLoaded( function(){
	 		console.log( "masonry" );
			$ ('#detail').masonry({
				itemSelector: '.box',
				isFitWidth: true				
			});
		});
		$('#detail').masonry( 'reloadItems' );
		$('#textbox').css('display', 'none');
        $('#main').fadeIn('slow');
    });}

function loadFragments() {
	$.scrollTo( $('#main'), 400 );
	$('#main').fadeOut('slow', function() {
	 	$('#main').css("background-image", "url(img/fragments.jpg)"); 
		$('#logo').html('<img src="img/cucumber.png">');
	 	$('#detail').html('<div class="box"><img src="img/fragments01.jpg"></div><div class="box"><img src="img/fragments02.jpg"></div><div class="box"><img src="img/fragments03.jpg"></div><div class="box"><img src="img/fragments04.jpg"></div><div class="box"><img src="img/fragments05.jpg"></div><div class="box"><img src="img/fragments06.jpg"></div>');
	 	$('#detail').imagesLoaded( function(){
	 		console.log( "masonry" );
			$ ('#detail').masonry({
				itemSelector: '.box',
				isFitWidth: true				
			});
		});
		$('#detail').masonry( 'reloadItems' );
		$('#textbox').css('display', 'none');
        $('#main').fadeIn('slow');
    });
}
