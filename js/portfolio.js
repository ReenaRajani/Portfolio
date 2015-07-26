$(document).ready(function(){
  $('#fullpage').fullpage({
    
    // Navigation
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    fitToSection: true, 
    loopHorizontal: true, 
    loopBottom: true, 
    loopTop: true,
    keyboardScrolling: true, 
    navigation: true, 
    navigationPosition: 'right',
    
    //scrolling 
    css3: true,
    autoscrolling: true,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    scrollOverflow: false, 
    scrollingSpeed: 800, 

    //Design
    controlArrows: true,
    resize: true, 
    // sectionsColor: ['#003399', '#335CAD', '#6685C2'],
    paddingTop: '1em',
    responsiveWidth: 0,
    responsiveHeigt: 0

  });


    var colorFunc = function(x, y) {
          return 'hsl('+Math.floor(Math.abs(x*y)*360)+',80%,60%)';
    };

    var setPattern = function(height, width, variance) {
       var pattern  = Trianglify({
          height: height,
          width: width,
          cell_size: 120,
          variance: variance,
          x_colors: 'random',
          
    });
        return pattern;

    }
    
    height = $('#section1').height();
    width = $('#section1').width();
    pattern = setPattern(height,width,"0.89");
    
    $('#section1').css('background-image', 'url(' + pattern.png() + ')');
    $('#section1').css('background-size', 'cover');
    $('#section1').css('background-repeat', 'no-repeat');

    $('.contacts').css('background-image', 'url(' + pattern.png() + ')');
    $('.contacts').css('background-size', 'cover');
    $('.contacts').css('background-repeat', 'no-repeat');


    
    $(".pics ").slick({
        slidesToShow: 1,
        speed:300,
        autoplay: true,
        fade: true,
        infinite: true,
        pauseOnHover:true,
        cssEase: 'linear',
        arrows:false,
        respondTo:'min',
        adaptiveHeight: true

    });


    
});