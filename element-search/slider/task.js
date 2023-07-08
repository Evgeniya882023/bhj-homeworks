let slides = Array.from(document.querySelectorAll(".slider__item"));
let arrowPrev = document.querySelector(".slider__arrow_prev");
let arrowNext = document.querySelector(".slider__arrow_next");



function nextSlide() {
	let index = slides.findIndex((el) => el.classList.contains('slider__item_active'))
    slides[index].classList.remove('slider__item_active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('slider__item_active');
}

function prevSlide() {
	let index = slides.findIndex((el) => el.classList.contains('slider__item_active'))
    slides[index].classList.remove('slider__item_active');
    index = ((index - 1) + slides.length) % slides.length;
    slides[index].classList.add('slider__item_active');
}

arrowNext.onclick = () => {
	let slider = 0;
	if (slider >= slides.length - 1) {
		slider = 0;
	} else {
		slider++;
	}
	nextSlide();
	
}

arrowPrev.onclick = () => {
	let slider = 0;
	if (slider <= 0) {
		slider = slides.length - 1;
	} else {
		slider--;
	}
	prevSlide();
	
}















