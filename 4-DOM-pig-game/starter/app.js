/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GOLBAL score. After that, it's
 the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

//gamePlaying is being used as a state variable
var diceDOM =  document.querySelector('.dice');

init();
var prevRoll;
//Events are put in the message queue once the execution stack is empty
// a callback function is a function not called by us but by another function.
// function btn() {
    //do something
// };
//
// btn();

// document.querySelector('.btn-roll').addEventListener('click', btn);

// and annoymous function that doesn't have a name so you can call it

function switchPlayer (){
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceDOM.style.display = 'none';
}

document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying){
        // random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result

        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //3. update the round score If the rolled number was Not a 1
         else if (dice !== 1){
            //add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;


        } else{
            //next player
            switchPlayer();
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }

        prevRoll = dice;
    }


});

document.querySelector('.btn-hold').addEventListener('click', function () {
   //add current score to GLOBAL Score
    scores[activePlayer] += roundScore;

    //Updated the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        if(gamePlaying){
            // Check if player won the game
            if (scores[activePlayer] >= 100) {
                document.getElementById('name-' + activePlayer).textContent = 'Winner!';
                diceDOM.style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gamePlaying = false;
            } else{
                //next player
                switchPlayer();
            }
        }
});

document.querySelector('.btn-new').addEventListener('click', init);


function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}


// only can set text with textContent
// document.querySelector('#current-' + activePlayer).textContent = dice;

// can set html with InnerHtml
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;