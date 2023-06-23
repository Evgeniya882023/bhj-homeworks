let startTime = 0;
let clickerTime = document.getElementById("clicker__counter");
let image = document.getElementById("cookie");

function changeSizes() {
	startTime++;
	clickerTime.textContent = startTime;
	if (startTime % 2 != 0) {
		image.width = 100;
		image.height = 100;
	} else {
		image.width = 150;
		image.height = 150;
	}
};
image.onclick = changeSizes;