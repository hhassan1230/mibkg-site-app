
$( "#game_click" ).click(function(e) {
	e.preventDefault();
	if($(window).innerWidth() <= 751) {
	  $( '.rectangle_side-nav' ).css('margin-left','17%');
	  
	} else {
	   $( '.rectangle_side-nav' ).css('top','175px');
		$( ".arrow_game_section" ).css('display','block');
	}
	$( "#game_section" ).css('display','block');
	$( "#game_section_mobile" ).css('display','block');
	$( "#merch_section" ).css('display','none');
	$( "#other_section" ).css('display','none');
	$( ".bg-image-C61RwL" ).css('display','none');
	$( ".bg_grey" ).css('display','block');
	
});
$( "#merch_click" ).click(function(e) {
	e.preventDefault();
	if($(window).innerWidth() <= 751) {
	  $( '.rectangle_side-nav' ).css('margin-left','118%');
	} else {
	   $( '.rectangle_side-nav' ).css('top','266px');
		$( ".arrow_game_section" ).css('display','block');
	}
	$( "#game_section" ).css('display','none');
	$( "#game_section_mobile" ).css('display','none');
	$( "#merch_section" ).css('display','block');
	$( "#other_section" ).css('display','none');
	$( ".bg-image-C61RwL" ).css('display','none');
	$( ".bg_grey" ).css('display','block');
});
$( "#other_click" ).click(function(e) {
	e.preventDefault();
	if($(window).innerWidth() <= 751) {
	   $( '.rectangle_side-nav' ).css('margin-left','218%');
	} else {
	   $( '.rectangle_side-nav' ).css('top','357px');
	}
	$( "#game_section" ).css('display','none');
	$( "#game_section_mobile" ).css('display','none');
	$( "#merch_section" ).css('display','none');
	$( "#other_section" ).css('display','block');
	$( ".bg-image-C61RwL" ).css('display','block');
	$( ".bg_grey" ).css('display','none');
	$( ".arrow_game_section" ).css('display','none');
	
});
$( ".cancel-C61RwL" ).click(function(e) {
	e.preventDefault();
	$( '.dark-overlay-C61RwL' ).css('display','none');
	
});
$( "#youtube" ).click(function(e) {
	e.preventDefault();
	$( '.dark-overlay-C61RwL' ).css('display','block');
	
});