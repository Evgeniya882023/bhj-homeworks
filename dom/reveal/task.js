const revealArray = Array.from(document.querySelectorAll('.reveal'));

function activeReveal() {
	for (let el of revealArray) {
		if (el.getBoundingClientRect().bottom <= window.innerHeight && el.getBoundingClientRect().top < window.innerHeight && el.getBoundingClientRect().bottom >= 0) {
			el.classList.add('reveal_active');
		} else {
			el.classList.remove('reveal_active');
		}
	}
}
document.addEventListener('scroll', activeReveal);

