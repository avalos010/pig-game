/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore, activePlayer,gamePlaying,currentRoll1,PreviousRoll1,currentRoll2,PreviousRoll2;

init();




 	
 	



document.querySelector('.btn-roll').addEventListener('click', function(){
	if(gamePlaying === true) {
		//PreviousRoll

		//1. Random Number
	var dice1 = Math.floor(Math.random() * 6 ) + 1;
	var dice2 =  Math.floor(Math.random() * 6 ) + 1;

	//2 Display Result 
	var diceDOM1 = document.querySelector('.dice1');
	var diceDOM2 = document.querySelector('.dice2');
	diceDOM1.style.display = 'block';
	diceDOM2.style.display = 'block';
	diceDOM1.src = 'dice-' + dice1 + '.png';
	diceDOM2.src = 'dice-' + dice2 + '.png';

	// console.log('dice1 ' + dice1 );
	// 	console.log('dice2 ' + dice2 );

	//3.Update the round score IF the rolled number was NOT a 1
	if(dice1 > 1 && dice2 > 1) {
		//add score
		roundScore += dice1 + dice2;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;

	}
	else {
		//score to 0
		roundScore = 0;
		//next player
		nextPlayer();
}
PreviousRoll1 = currentRoll1;
currentRoll1 = dice1;
PreviousRoll2 = currentRoll2;
currentRoll2 = dice2;

	if(PreviousRoll1 === 6 && currentRoll1 === 6) {
		scores[activePlayer] = 0;
		document.getElementById('score-' + activePlayer).textContent = 0;
		nextPlayer();
	
}
	else if(PreviousRoll2 === 6 && currentRoll2 === 6) {
	
		scores[activePlayer] = 0;
		document.getElementById('score-' + activePlayer).textContent = 0;
		nextPlayer();
		}
	else if(PreviousRoll1 === 6 && currentRoll2 === 6) {
	
		scores[activePlayer] = 0;
		document.getElementById('score-' + activePlayer).textContent = 0;
		nextPlayer();
		}
		else if(PreviousRoll2 === 6 && currentRoll1 === 6) {
	
		scores[activePlayer] = 0;
		document.getElementById('score-' + activePlayer).textContent = 0;
		nextPlayer();
		}
	}
});


document.querySelector('.btn-hold').addEventListener('click',function(){
	if(gamePlaying) {
	//add current score to global score
		scores[activePlayer] += roundScore;
	//update the ui
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
	//check if player won game
	var input = document.querySelector('.final-score').value;
	var winningScore;
	//undefined,0,null or " are COERCED to false"
	//anything else is COERCED to true
	if(input) {
		 winningScore = input;
	}
	else {
		winningScore = 100;
	}
 	if(scores[activePlayer] >= winningScore) {
 		document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
 		document.querySelector('.dice1').style.display = 'none';
 		document.querySelector('.dice2').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
 		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
 		gamePlaying = false;
 		}
 	else {
 		//nextPlayer
	nextPlayer();

 		}
	}	

});

function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;

		document.getElementById('current-0').textContent = 0;
		document.getElementById('current-1').textContent = 0;

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice1').style.display = 'none';
		document.querySelector('.dice2').style.display = 'none';

}


document.querySelector(".btn-new").addEventListener('click',init);


function init() {


scores = [0,0];
roundScore = 0;
activePlayer = 0; 
gamePlaying = true;
document.querySelector('.dice1').style.display = 'none';
document.querySelector('.dice2').style.display = 'none';

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}





//document.querySelector("#current-" + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;

//code challenge 3







