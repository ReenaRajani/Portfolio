$(document).ready(function(){
  $('#fullpage').fullpage({
    
    // Navigation
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    fitToSection: true, 
    loopHorizontal: true, 
    loopBottom: true, 
    keyboardScrolling: true, 
    navigation: true, 
    navigationPosition: 'right', 
    slidesNavigation: true, 
    slidesNavPosition: 'bottom',
    
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
    paddingTop: '3em',
    responsiveWidth: 0,
    responsiveHeigt: 0

  });

    // pattern  = Trianglify({
    //       height: $('#section1').height(),
    //       width: $('#section1').width(),
    //       cell_size: 120,
    //       variance: "0.89",
    //       // seed:'OrRd',
    //       x_colors: 'random'
    // });

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

    var currentIndex = 0,
    items = $('.pics div'),
    itemAmt = items.length;

    var cycleItems = function() {
        var item = $('.pics div').eq(currentIndex);
        items.hide();
        item.css('display','inline-block');
    };

    var autoSlide = setInterval(function() {
        currentIndex += 1;
        if (currentIndex > itemAmt - 1) {
            currentIndex = 0;
        }
        cycleItems();
    }, 3000);

});