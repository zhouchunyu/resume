!function(){
  var view = document.querySelector('.swiper-container');
  var controller = function(view) {
    var mySwiper = new Swiper (view, {
      speed: 1000,
      loop: true,
          // If we need pagination
      pagination: {
      el: '.swiper-pagination',
      },  
      // Navigation arrows
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      }
    });
  }
  controller.call(undefined, view);
}.call();