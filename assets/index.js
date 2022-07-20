const burgerBtn = document.getElementById('burger__btn')
let burgerMenu = document.querySelector('.header__wrapper')
burgerBtn.addEventListener('click', function () {
	burgerMenu.classList.toggle('active')
	burgerBtn.classList.toggle('burger__active')
})


const firstSwiperSecondary = new Swiper(".mySwiper", {
	spaceBetween: 10,
	slidesPerView: 6,
	// navigation: {
	// 	nextEl: ".swiper-button-next",
	// 	prevEl: ".swiper-button-prev",
	// },
	
});
const firstSwiperMain = new Swiper(".mySwiper2", {
	loop: true,
	effect: "fade",
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	thumbs: {
	  swiper: firstSwiperSecondary,
	},
});
