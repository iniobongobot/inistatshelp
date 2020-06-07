function MindGame(){
	let Game = document.getElementById('MindGame').value;
	if (Game == 'RPS'){
		var output= "<fieldset><legend>Rock ,Paper, Scissors</legend>"+
				"<select id="+"'rps'"+"><option value="+"'Nothing'"+"selected>Pick One to Play</option>"+
				"<option value="+"'Rock'"+">Rock</option>"+
				"<option value="+"'Paper'"+">Paper</option>"+
				"<option value="+"'Scissors'"+">Scissors</option>"+
			"</select>"+	
			"</br>"+
			"<button onclick="+'RPS()'+">Let's Play</button>"+
			"</fieldset></br>"+
			"<p id="+"'answer'"+"></p>";
	}
	else if (Game == 'Guess'){
		var output= "<fieldset><legend>Guess A Number betwwen 1 and 5</legend>"+
				"<label>Guess<input id='Guess' type='number' min='1' max='5'></label>"+
				"</br>"+"<button onclick="+'GuessGame()'+">Let's Play</button>"+
			"</fieldset></br>"+
			"<p id="+"'answer'"+"></p>";
	}
	else if (Game == 'Magic'){
		console.log('Magic 8 Ball');
	}
	else{
		var output = "<h2 style="+"'color:red'"+">Pick a Game to play</h2>";
	}
	document.getElementById('secassign').innerHTML=output;
}

function RPS(){
let rps = document.getElementById('rps').value;
var random = Math.floor(Math.random() * 3) + 1;
//1-Rock, 2-Paper, 3-Sciccor
let one="Rock",	two="Paper", three="Scissors";
//now comes the if statement
var result = false, say = false;
if(rps=="Nothing"){
	say= "<h2 style="+"'color:red'"+">Missing parameter</h2>";
}
else if (random==1 && rps == one){
	result = "DRAW!!";
	say="<h1>"+result+"</h1><h2>You Chose: "+rps+", Computer Chose "+one+"</br><hr> Thank you for Playing!!</h2>";
}
else if (random==1 && rps == two){
	result = "YOU WIN!!";
	say="<h1>"+result+"</h1><h2>You Chose: "+rps+", Computer Chose "+one+"</br><hr> Thank you for Playing!!</h2>";
}
 else if (random==1 && rps == three){
	result = "YOU LOSE!!";
	say="<h1>"+result+"</h1><h2>You Chose: "+rps+", Computer Chose "+one+"</br><hr> Thank you for Playing!!</h2>";
}
else if (random==2 && rps == one){
	result = "YOU LOSE!!";
	say="<h1>"+result+"</h1><h2>You Chose: "+rps+", Computer Chose "+two+"</br><hr> Thank you for Playing!!</h2>";
}
else if (random==2 && rps == two){
	result = "DRAW!!";
	say="<h1>"+result+"</h1><h2>You Chose: "+rps+", Computer Chose "+two+"</br><hr> Thank you for Playing!!</h2>";
}
 else if (random==2 && rps == three){
	result = "YOU WIN!!";
	say="<h1>"+result+"</h1><h2>You Chose: "+rps+", Computer Chose "+two+"</br><hr> Thank you for Playing!!</h2>";
}
else if (random==3 && rps == one){
	result = "YOU WIN!!";
	say="<h1>"+result+"</h1><h2>You Chose: "+rps+", Computer Chose "+three+"</br><hr> Thank you for Playing!!</h2>";
}
else if (random==3 && rps == two){
	result = "YOU LOSE!!";
	say="<h1>"+result+"</h1><h2>You Chose: "+rps+", Computer Chose "+three+"</br><hr> Thank you for Playing!!</h2>";
}
 else if (random==3 && rps == three){
	result = "DRAW!!";
	say="<h1>"+result+"</h1><h2>You Chose: "+rps+", Computer Chose "+three+"</br><hr> Thank you for Playing!!</h2>";
}
document.getElementById('answer').innerHTML=say;
}

function GuessGame(){
let Guess = document.getElementById('Guess').value;
var random = Math.floor(Math.random() * 5) + 1;
if(Guess==""){
	say= "<h2 style="+"'color:red'"+">Missing Guess parameter</h2>";
}
else if (Guess == random){
	say="<h1>Congrats You Got it Right!!</br><hr> Thank you for Playing!!</h2>";
}
else if (Guess != random){
	say="<h1> Sorry you got it wrong</br> The Number was "+random+"</h1><h2>You Chose: "+Guess+"</br><hr> Thank you for Playing!!</h2>";
}
 document.getElementById('answer').innerHTML=say;
}