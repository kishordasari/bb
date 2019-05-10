$(document).ready(function(){
    var ht = $('.navbar-default').height();
    console.log(ht);
    $("#content").css('padding-top',$('.navbar-default').height());


    // $(".scroll-downs").click(function() {
    //     $('html,body').animate({
    //         scrollTop: $("#content").offset().top - 50},
    //         1000);
    // });

});

$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {        
        $('.scroll-downs').fadeOut('fast');    
    } else {
        $('.scroll-downs').fadeIn('fast');  
    }
});

$('#fullpage').fullpage({
    sectionsColor: ['', '', ''],
    anchors:[],
    slidesNavigation: true,
    css3: true,
    scrollingSpeed: 500,
    easingcss3: 'cubic-bezier(.77,.11,.8,.41)',
    
    loopHorizontal: true,
    controlArrows: true,
    scrollOverflow: true
});

$(".scroll-downs").click(function() {
    $.fn.fullpage.moveSectionDown();
});
