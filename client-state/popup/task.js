let modalMain = document.getElementById('subscribe-modal')
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

let modalSuccess = document.getElementById("subscribe-modal")

document.querySelectorAll("div.modal__close_times").onclick = function() {
	modalMain.classList.remove('modal_active');
    document.cookie = "modal=close";
	modalSuccess.classList.add('modal_active');
}

window.addEventListener("load", () => {
    if (!document.cookie.includes("modal=close")) {
        modalSuccess.classList.add("modal_active");
    }
  });
  
