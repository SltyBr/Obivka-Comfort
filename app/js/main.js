
//slider
const slider = document.querySelector('.swiper-container')

let mySwiper = new Swiper(slider, {
  slidesPerView: 4,
  spaceBetween: 60,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  slideToClickedSlide: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {

    140: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    280: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    360: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    640: {
      slidesPerView: 3,
      spaceBetween: 30
    },

    960: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
})

//modal window

