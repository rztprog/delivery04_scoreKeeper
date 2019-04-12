'use strict';

////////// VARIABLES /////////
//////////////////////////////

const playerWrapper = document.getElementsByClassName("player-wrapper")[0].style;
const footer = document.getElementsByClassName("footer")[0];
const copyr = document.getElementsByClassName("copyr")[0];

// Player One
let scoreOne = 0;
const scorePanelOne = document.getElementsByClassName("scorePanel--one")[0];
const buttonOne = document.getElementsByClassName("button--one")[0];
buttonOne.onclick = increment;
buttonOne.addEventListener("click", scoreCheck);

// Player Two
let scoreTwo = 0;
const scorePanelTwo = document.getElementsByClassName("scorePanel--two")[0];
const buttonTwo = document.getElementsByClassName("button--two")[0];
buttonTwo.onclick = incrementTwo;
buttonTwo.addEventListener("click", scoreCheck);

// Reset
let buttonReset = document.getElementsByClassName("button--reset")[0]; 
buttonReset.onclick = reset; 

// Stop
let stop = document.getElementsByClassName("input")[0];

// Darkmode 
let y = 1;
let dark = document.getElementsByClassName("darkmode-button")[0];
dark.textContent = "☀️";
let body = document.getElementsByClassName("body")[0].style;
let header = document.getElementsByClassName("header")[0].style;
dark.onclick = darkmode;


////////// FUNCTION //////////
//////////////////////////////

function increment(){
	scoreOne++;
	scorePanelOne.innerHTML = scoreOne;
};

function incrementTwo(){
	scoreTwo++;
	scorePanelTwo.innerHTML = scoreTwo;
};

function scoreCheck(){
	if(scorePanelOne.innerHTML == stop.value){
		scorePanelOne.style.color = "#0F0";
		scorePanelTwo.style.color = "#F00";
		scorePanelOne.style.border = "2px solid #0F0";
		scorePanelTwo.style.border = "2px solid #F00";
		buttonOne.style.color = "#888";
		buttonTwo.style.color = "#888";
		buttonOne.onclick = null;
		buttonTwo.onclick = null;
	}else if(scorePanelTwo.innerHTML == stop.value){
		scorePanelTwo.style.color = "#0F0";
		scorePanelOne.style.color = "#F00";
		scorePanelTwo.style.border = "2px solid #0F0";
		scorePanelOne.style.border = "2px solid #F00";
		buttonOne.style.color = "#888";
		buttonTwo.style.color = "#888";
		buttonOne.onclick = null;
		buttonTwo.onclick = null;
	}
};

function reset(){
	scoreOne = 0;
	buttonOne.onclick = increment;
	buttonOne.addEventListener("click", scoreCheck);
	scorePanelOne.innerHTML = scoreOne;
	scorePanelOne.style.border = "2px solid #666";
	buttonOne.style.color = "#FFF";

	scoreTwo = 0;
	buttonTwo.onclick = incrementTwo;
	buttonTwo.addEventListener("click", scoreCheck);
	scorePanelTwo.innerHTML = scoreTwo;
	scorePanelTwo.style.border = "2px solid #666";
	buttonTwo.style.color = "#FFF";

	stop.value = null;

	switch(y) {
		case 1: 
			scorePanelOne.style.color = "#FFF";
			scorePanelTwo.style.color = "#FFF";
			break;
		default:
			scorePanelOne.style.color = "#000";
			scorePanelTwo.style.color = "#000";
			break;
	}
};

function darkmode(){
	switch(y) {
		case 1:		// LIGHT
			body.backgroundColor = "#FFF";
			body.color = "#000";
			header.backgroundColor = "#DDD";
			header.color = "#000";
			playerWrapper.color = "#000";
			scorePanelOne.style.color = "#000";
			scorePanelTwo.style.color = "#000";
			copyr.style.color = "#000";
			footer.style.backgroundColor = "#DDD";
			dark.textContent = "🌑";
			y--;
			break;
		default:	// DARK
			body.backgroundColor = "#444";
			body.color = "#FFF";
			header.backgroundColor = "#555";
			header.color = "#FFF";
			playerWrapper.color = "#FFF";
			scorePanelOne.style.color = "#FFF";
			scorePanelTwo.style.color = "#FFF";
			footer.style.backgroundColor = "#555";
			copyr.style.color = "#FFF";
			dark.textContent = "☀️";
			y++;
			break;
	}
};
