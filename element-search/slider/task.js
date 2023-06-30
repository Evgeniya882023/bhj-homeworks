let slides = Array.from(document.querySelectorAll(".slider__item"));
let arrowPrev = document.querySelector(".slider__arrow_prev");
let arrowNext = document.querySelector(".slider__arrow_next");

function activeSlide() {
	let slider = 0;
	let index = findIndex(slides.classList.contains("slider__item_active"));
	slides[index].classList.remove("slider__item_active");

	if (slider < 0) {
		slides[length - 1].classList.add("slider__item_active");
	} else if (slider > slides.length - 1 || slider >= slides.length) {
		slides[0].classList.add("slider__item_active");
	} else {
		slides[slider].classList.add("slider__item_active");
	}
}

arrowNext.onclick = () => {
	let slider = 0;
	if (slider >= slides.length - 1) {
		slider = 0;
	} else {
		slider++;
	}
	activeSlide(slider);
}

arrowPrev.onclick = () => {
	let slider = 0;
	if (slider <= 0) {
		slider = slides.length - 1;
	} else {
		slider--;
	}
	activeSlide();
}














