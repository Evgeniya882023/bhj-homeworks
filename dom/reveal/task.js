const revealArray = Array.from(document.querySelectorAll('.reveal'));

function activeReveal() {
	for (let el of revealArray) {
		el.classList.remove('reveal_active');
		if (el.getBoundingClientRect().top < window.innerHeight) {
			el.classList.add('reveal_active');
		}
	}
}
document.addEventListener('scroll', activeReveal);

