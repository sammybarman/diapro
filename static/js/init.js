$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  var autoplay = true;
  setInterval(function() { if(autoplay) $('.carousel.carousel-slider').carousel('next'); }, 5000);
  $('.carousel.carousel-slider').hover(function(){ autoplay = false; },function(){ autoplay = true; });

$(document).ready(function(){
    $('.parallax').parallax();
  });

  $(document).ready(function(){
      $('.fixed-action-btn').floatingActionButton();
      
    });