const player1 = {
	name: 'Sonya',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
	weapon: ['knife', 'fork', 'spoon'],
	attack: () => {
		console.log(`${this.name} Fight...`)
	},
};

const player2 = {
	name: 'Scorpion',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['dad', 'mom'],
	attack: () => {
		console.log(`${this.name} Fight...`)
	},
};

function createPlayer(className, player) {
	const $name = document.createElement('div');
	$name.classList.add('name');
	$name.innerText = player.name;
	const $life = document.createElement('div');
	$life.classList.add('life');
	$life.style.width = player.hp + '%';
	const $progressBar = document.createElement('div');
	$progressBar.classList.add('progressbar');
	$progressBar.appendChild($name);
	$progressBar.appendChild($life);

	const $img = document.createElement('img');
	$img.src = player.img;
	const $character = document.createElement('div');
	$character.classList.add('character');
	$character.appendChild($img);

	const $player = document.createElement('div');
	$player.classList.add(className);
	$player.appendChild($progressBar);
	$player.appendChild($character);

	document.querySelector('.arenas').appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);