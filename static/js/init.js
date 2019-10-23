$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.parallax').parallax();
});

$(window).scroll(function(){

  if($(window).scrollTop()>20){
    $('nav').addClass('bg');
    $('.brand-logo').addClass('red-text');
    $('.forjq').addClass('bg2');
  }else{
    $('nav').removeClass('bg');
    $('.brand-logo').removeClass('red-text');
    $('.forjq').removeClass('bg2');
  }
});








// $('.carousel.carousel-slider').carousel({
//     fullWidth: true,
//     indicators: true
//   });
//   var autoplay = true;
//   setInterval(function() { if(autoplay) $('.carousel.carousel-slider').carousel('next'); }, 5000);
//   $('.carousel.carousel-slider').hover(function(){ autoplay = false; },function(){ autoplay = true; });
//
// $(document).ready(function(){
//     $('.parallax').parallax();
//   });
//
// $(document).ready(function(){
//       $('.fixed-action-btn').floatingActionButton();
//
//   });
//
// $(document).ready(function(){
//
//       $(window).scroll(function(){
//
//        if($(window).scrollTop()>20){
//          $('nav').addClass('bg');
//        }else{
//          $('nav').removeClass('bg');
//        }
//     });
//   });
