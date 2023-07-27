let dropdownArray = Array.from(document.querySelectorAll(".dropdown__link"));
let dropdownName = document.querySelector('.dropdown__value');

function closeAndOpenList() {
	const activeLink = document.querySelector('.dropdown__list');
	if (activeLink.classList.contains('dropdown__list_active')) {
		activeLink.classList.remove('dropdown__list_active');
	} else {
		activeLink.classList.add('dropdown__list_active');
	}

}
dropdownName.addEventListener('click', closeAndOpenList);

dropdownArray.forEach(function(item) {
	item.onclick = function() {
		document.querySelector('.dropdown__value').textContent = item.textContent;
		return false;
	};
	item.addEventListener('click', closeAndOpenList);
})

