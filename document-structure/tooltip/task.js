const hasTooltip = Array.from(document.getElementsByClassName('has-tooltip'));

function toolTipActive(event) {
	event.preventDefault();
	for (tip of hasTooltip) {
		if (tip.classList.contains('tooltip_active')) {
			tip.remove();
		}
	}
	this.insertAdjacentHTML('afterend', `<div class="tooltip tooltip_active">${this.title}</div>`);
}

for (let i = 0; i < hasTooltip.length; i++) {
	let element = hasTooltip[i];
	element.addEventListener('click', toolTipActive);
}

