let startTime = 59;
let counter = setInterval(function() {
	startTime = document.getElementById("timer");
	if (startTime.textContent >= 1) {
		startTime.textContent--;
		console.log(startTime);
	} else {
		clearInterval(counter);
		alert("Вы победили в конкурсе!");
	}
}, 1000);
