let menuBar = document.querySelector("#menuBtn");
let navLinks= document.querySelector(".navLinks")
const logo = document.querySelector(".logo")
menuBar.addEventListener('click', e => {
  navLinks.classList.toggle("toggle")
  if(navLinks.classList.contains("toggle")){
    logo.style.display = 'none'
  } else{
    logo.style.display = 'block'
  }
})


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 1,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

});