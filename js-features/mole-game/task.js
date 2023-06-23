let getHole = index => document.getElementById(`hole${index}`);
let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');

let dead = 0;
let lost = 0;

for (let i = 1; i <= 9; i++) {
	getHole(i).onclick = function() {

		if (this.className.includes('hole_has-mole')) {
			dead++;
			deadMole.textContent = dead;
		} else {
			lost++;
			lostMole.textContent = lost;
		};

		game(dead, lost);
	};
};

function game(deadMole, lostMole) {
	console.log(deadMole, lostMole);
	if (dead == 10) {
		alert("Победа");
		dead = 0;
		deadMole.textContent = dead;
		lost = 0;
		lostMole.textContent = lost;

	} else if (lost == 5) {
		alert("Вы проиграли!");
		dead = 0;
		deadMole.textContent = dead;
		lost = 0;
		lostMole.textContent = lost;
	};
	
};
