const hasTooltip = document.querySelectorAll(`.has-tooltip`);

for (let i = 0; i < hasTooltip.length; i++) {
	hasTooltip[i].insertAdjacentHTML(`afterEnd`, `<div class="tooltip">${hasTooltip[i].title}</div>`);
	hasTooltip[i].addEventListener('click', toolTipActive)

	function toolTipActive(event) {
		event.preventDefault();
		const tooltip = document.querySelectorAll(`.tooltip`);
		if (tooltip[i].classList.contains(`tooltip_active`)) {
			tooltip[i].classList.remove(`tooltip_active`);
		} else {
			tooltip[i].classList.add(`tooltip_active`);

			let position = hasTooltip[i].getBoundingClientRect();

			tooltip[i].style.left = position.left + "px";
			tooltip[i].style.top = positiontop + 20 + "px";

		}
	}
}

