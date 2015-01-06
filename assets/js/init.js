/*****************
SVG LINE ANIMATION
******************/
var init = function () {
    current_frame = 0;
    total_frames = 130;
    total_paths = document.getElementsByTagName('path').length;
    path = [];
    lineLength = [];
    for (var i = 0; i < total_paths; i++){
        path[i] = document.getElementById('i' + i);
        l = path[i].getTotalLength();
        lineLength[i] = l;
        path[i].style.strokeDasharray = l + ' ' + l;
        path[i].style.strokeDashoffset = l;
        //console.log(i);
    }
    handle = 0;
    draw();
};


var draw = function () {
    var progress = current_frame / total_frames;
    if (progress > 1) {
        window.cancelAnimationFrame(handle);
    } else {
        current_frame++;
        for (var j = 0; j < path.length; j++) {
            path[j].style.strokeDashoffset = Math.floor(lineLength[j] * (1 - progress));
        }
        handle = window.requestAnimationFrame(draw);
    }
};
var rerun = function () {
    var old = document.getElementById('myobj');
    //var frame = old.parentNode;
    old.getElementsByTagName('svg')[0].getstyle.webkitTransform = 'scale(1)';
    
	
    //console.log(frame);
    //old.parentNode.removeChild(old);
    //console.log(myobj);
    //frame.appendChild(myobj);
    //init();
};


$(function ($) {
	if(document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")){
		(function(H){H.className=H.className.replace(/\bno-svg\b/,'svg')})(document.documentElement);
	}

	// Picture element HTML5 shiv
	document.createElement( "picture" );
	
	/*****************
	GO TO TOP
	******************/
	// $(window).scroll(function() {
	// 	disfromtop = $(this).scrollTop();
	// 	disfromtop > 250 ? $('#go-top').addClass('animate') : $('#go-top').removeClass('animate') ;
	// });

	// $('#go-top').click(function(e){
	// 	e.preventDefault();
	// 	$('html, body').stop().animate({
	// 		scrollTop: 0
	// 	});
	// });
	

	/*****************
	OVERLAY
	******************/
	// var closeOverlay = function(){
	// 	$(".overlay").addClass('hidden').attr("aria-hidden", "true");
	// }
	// $(".close").click(function(e){
	// 	e.preventDefault();
	// 	closeOverlay();
	// })

	// $(document).keyup(function(e) {
	// 	//Close Overlay on escape key press
	// 	if (e.keyCode == 27) {
	// 		closeOverlay();
	// 	}// esc
	// });

	/*****************
	ENQUIREJS
	******************/
	//enquire.register("screen and (min-width: 767px)", {
	//     match : function() {
	    	
	//     },
	//     unmatch : function() {
	    	
	//     },
	// });

	/*****************
	404 Shrug
	******************/
	if($('#shrug').length){
		var quotes = Array(
		    'assets/images/shrugs/shrug1.gif',
		    'assets/images/shrugs/shrug2.gif',
		    'assets/images/shrugs/shrug3.gif',
		    'assets/images/shrugs/shrug4.gif');
		var quote = quotes[Math.floor(Math.random() * quotes.length)];
		$('#shrug').attr('src', quote);
	}

	/*****************
	MENU
	******************/
	$('#menu').click(function(){
		$('.menu').toggle();
	    $(this).toggleClass('alternative');
	    $('#full-screen').toggleClass('show');
	    return false
	});

	/*****************
	SVG LINE ANIMATION
	******************/
	

	if(document.getElementById('myobj')){
		var current_frame, total_frames, path, lineLength, handle, myobj, total_paths, l;

		myobj = document.getElementById('myobj').cloneNode(true);

		var link = document.getElementById('re');
	    link.onclick = function () {
	        rerun();
	    };
	}

	init();

    
}(jQuery));