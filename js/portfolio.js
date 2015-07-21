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
});