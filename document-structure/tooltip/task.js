const hasTooltip = Array.from(document.getElementsByClassName('has-tooltip'));
let tooltip = document.createElement('div');
tooltip.className = 'tooltip';

hasTooltip.forEach((i) => {

	i.addEventListener('click', toolTipActive)

	function toolTipActive(event) {
		if (tooltip.innerHTML != i.title) {
			tooltip.innerHTML = i.title
			i.insertAdjacentHTML('afterend', `<div class="tooltip tooltip_active" style="left: ${i.getBoundingClientRect().left}px; top: ${i.getBoundingClientRect().top+20}px">${this.title}</div>`);
			tooltip.classList.add('tooltip_active');
		} else {
			tooltip.classList.toggle(`tooltip_active`);
			return
		}
		event.preventDefault();
	}

});
