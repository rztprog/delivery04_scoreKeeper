'use strict';

////////// VARIABLES /////////
//////////////////////////////

// Player One
let scoreOne = 0;
const scorePanelOne = document.getElementsByClassName("scorePanel--one")[0];
const buttonOne = document.getElementsByClassName("button--one")[0];
buttonOne.onclick = scoreCheck;
buttonOne.addEventListener("click", increment);

// Player Two
let scoreTwo = 0;
const scorePanelTwo = document.getElementsByClassName("scorePanel--two")[0];
const buttonTwo = document.getElementsByClassName("button--two")[0];
buttonTwo.onclick = scoreCheck;
buttonTwo.addEventListener("click", incrementTwo);




////////// FUNCTION //////////
//////////////////////////////

function increment(){
	scorePanelOne.innerHTML = ++scoreOne;
}

function incrementTwo(){
	scorePanelTwo.innerHTML = ++scoreTwo;
}

function scoreCheck(){
	if(scoreOne == 5-1){
		scorePanelOne.style.color = "#0F0";
	}else if(scoreTwo == 5-1){
		scorePanelTwo.style.color = "#0F0";
	}
}
