const interestCheck = Array.from(document.querySelectorAll(".interest__check"));
interestCheck.forEach(item => {
	const parentInterest = item.closest(".interest");
	const childInterest = Array.from(parentInterest.querySelectorAll(".interest__check"));


	item.addEventListener("change", () => {
		for (let el of childInterest) {

			if (item.checked) {
				el.checked = true;
			} else {
				el.checked = false;
			}
		}
	})
})




