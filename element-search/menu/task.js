let openMenueArray = Array.from(document.querySelectorAll(".menu__link"))
const activeLink = document.querySelectorAll('.menu_sub');
openMenueArray.filter(el => el !== activeLink).forEach(el => el.classList.remove("menu_active"))
openMenueArray.filter(el => el == activeLink).forEach(el => el.classList.add("menu_active"))

for (let el of openMenueArray) {
	el.onclick = function() {
		let mainEl = el.parentElement;
		let sub = mainEl.querySelector('.menu_sub');
		if (sub) {
			if (sub.className === 'menu menu_sub') {
				sub.className = 'menu menu_sub menu_active';
			} else {
				sub.className = 'menu menu_sub';
			}

			if (el.closest('.menu__item')) {
				return false;
			}
		}
	}
}




