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
    sectionsColor: ['#003399', '#335CAD', '#6685C2'],
    paddingTop: '3em',
    responsiveWidth: 0,
    responsiveHeigt: 0

  });

    var pattern  = Trianglify({
      height: $('#section1').height(),
      width: $('#section1').width(),
      cell_size: 120,
      variance: "0.89",
      // seed:'OrRd',
      x_colors: 'random'
    });
    $('#section1').css('background-image', 'url(' + pattern.png() + ')');
    $('#section1').css('background-size', 'cover');
    $('#section1').css('background-repeat', 'no-repeat');

});