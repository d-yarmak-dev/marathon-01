const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
	player: 1,
	name: 'Sonya',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
	weapon: ['knife', 'fork', 'spoon'],
	attack: () => {
		console.log(`${this.name} Fight...`)
	},
};

const player2 = {
	player: 2,
	name: 'Scorpion',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['dad', 'mom'],
	attack: () => {
		console.log(`${this.name} Fight...`)
	},
};

function createElement(tag, className) {
	const $tag = document.createElement(tag);
	if(className) {
		$tag.classList.add(className);
	}
	return $tag;
}

function changeHP(player) {
	const damage = Math.ceil(Math.random() * 20);
	const maxDamage = player.hp < damage ? player.hp : damage;

	player.hp -= maxDamage;

	const $playerLife = document.querySelector('.player' + player.player + ' .life');
	$playerLife.style.width = Math.max(player.hp, 0) + '%';
}

function playerWin(name) {
	const $winTitle = createElement('div', 'winTitle');
	$winTitle.innerText = name + ' win.';
	return $winTitle;
}
function draw() {
	const $title = createElement('div', 'winTitle');
	$title.innerText = 'Draw';
	return $title;
}

function createPlayer(player) {
	const $name = createElement('div', 'name');
	$name.innerText = player.name;
	const $life = createElement('div', 'life');
	$life.style.width = player.hp + '%';
	const $progressBar = createElement('div', 'progressbar');
	$progressBar.appendChild($name);
	$progressBar.appendChild($life);

	const $img = document.createElement('img');
	$img.src = player.img;
	const $character = createElement('div', 'character');
	$character.appendChild($img);

	const $player = createElement('div', 'player' + player.player);
	$player.appendChild($progressBar);
	$player.appendChild($character);

	return $player;
}

$randomButton.addEventListener('click', function() {
	changeHP(player1);
	changeHP(player2);

	if(player1.hp === 0 || player2.hp === 0) {
		if(player1.hp === 0 && player2.hp > 0) {
			$arenas.appendChild(playerWin(player2.name));
		} else if(player2.hp === 0 && player1.hp > 0) {
			$arenas.appendChild(playerWin(player1.name));
		} else {
			$arenas.appendChild(draw());
		}
		this.disabled = true;
	}
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));