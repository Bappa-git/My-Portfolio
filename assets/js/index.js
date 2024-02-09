/*=============== SERVICES MODAL ===============*/
const modal = document.querySelectorAll('.services_modal');
      modalButton = document.querySelectorAll('.services_button');
      modalClose = document.querySelectorAll('.services_modal-close')

let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal')
}     

modalButton.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
        activeModal(i)
    })
});


modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
      modal.forEach((modalRemove) => {
        modalRemove.classList.remove('active-modal')
      })  
    })
})
/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial = new Swiper('.testimonial_swiper', {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  autoplay: true,
  
  
  pagination: {
    el: '.swiper-pagination',
    dynamicsBullets: true,
    clickable: true,
  }
});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
   const scrollUp = document.getElementById('scroll-up')
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)