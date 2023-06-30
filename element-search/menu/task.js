let OpenMenueArray = Array.from(document.querySelectorAll(".menu__link"))
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




