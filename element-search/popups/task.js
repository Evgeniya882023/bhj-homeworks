let modalMain = document.getElementById('modal_main')
modalMain.classList.add('modal_active')

let modalCloseArray = Array.from(document.querySelectorAll("div.modal__close_times"))
closeButtons()
function closeButtons() {
	modalCloseArray.forEach(function(modal) {
		modal.onclick = function() {
			modal.closest('div.modal').classList.remove('modal_active');
		};
	})
}

let modalSuccess = document.getElementById("modal_success")

document.querySelector('div.modal a.btn_danger').onclick = function() {
	modalMain.classList.remove('modal_active');
	modalSuccess.classList.add('modal_active');
}