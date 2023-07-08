let OpenMenueArray = Array.from(document.querySelectorAll(".menu__link"))
const activeLink = document.querySelectorAll('.menu_sub');
OpenMenueArray.filter(el => el !== activeLink).forEach(el => el.classList.remove("menu_active"))
OpenMenueArray.filter(el => el == activeLink).forEach(el => el.classList.add("menu_active"))
for (let el of OpenMenueArray) {
	el.onclick = function() {
		let mainEl = el.parentElement;
		if (mainEl.querySelector('.menu_sub').className === 'menu menu_sub') {
			mainEl.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
		} else {
			mainEl.querySelector('.menu_sub').className = 'menu menu_sub'
		}

		if (el.closest('.menu__item')) {
			return false;
		}
	}
}






