//SIDE MENU SCRIPTS
 $(document).ready(function () {
            $('.menu-close-icon').click(function (e) {
                e.preventDefault();
                $('#side-menu').animate({ left: '-280px'});
               
            });
            $('.menu-open-icon').click(function (e) {
                e.preventDefault();
                $('#side-menu').animate({ left: '0px'});
               
            });
 });


// Preloader

$(window).load(function() {
	$("#loading-center").click(function() {
	$("#loading").fadeOut(500);
	})		
});

$(window).load(function() {
   $("#loading").fadeOut(500);
})

$(window).load(function() {
	$("#loading-center").click(function() {
	$("#loading").fadeOut(500);
	})
})

// Goto top
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});
