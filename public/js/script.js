$(document).ready(function(){
  $('.carousel').carousel({
    interval: 6000,
    cycle: true
});
});



// function doAnimate(elems){
//   var animateEvent = 'webkitAnimationEnd animationend';
//
//   elems.each(function (){
//     var$this = $(this),
//         $animateType = $this.data('animation');
//     $this.addClass($animateType).one(animateEvent, function (){
//       $this.removeClass($animateType);
//     });
//   });
// }

  // var $newsCarousel = $('#carousel-example-generic'),
  //   $firstAnimatingElems = $newsCarousel.find('.item:first').find("[data-animation ^= 'animated']");
//
// $newsCarousel.carousel();
// doAnimate($firstAnimatingElems);
//
// $myCarousel.on('slide.bs.carousel', function (e) {
//   var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
//   doAnimate($animatingElems);
// });
//   $('#carousel-example-generic').carousel({
//       interval:3000,
//       pause: "false"
//   });
//
// })


// $('#newsCarousel').on('slide.bs.carousel', function () {
//   // do something…
// });



$(window).scroll(function () {
         if ($(this).scrollTop() > 100) {
             $('.goToTop').fadeIn();
         } else {
             $('.goToTop').fadeOut();
         }
     });
     $('.goToTop').click(function () {
         $("html, body").animate({ scrollTop: 0 }, 1000);
         return false;
     });
