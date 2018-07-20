var mySwiper = new Swiper ('.swiper-container', {
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
})