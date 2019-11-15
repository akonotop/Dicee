var randomNumber1 = Math.floor(Math.random()*6+1);
var imgRandomSourse1 = "images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor(Math.random()*6+1);
var imgRandomSourse2 = "images/dice" + randomNumber2 + ".png";


if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2){
	document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
	document.querySelector("h1").innerHTML = "Draw!";
}

document.querySelector(".img1").setAttribute("src", imgRandomSourse1);

document.querySelector(".img2").setAttribute("src", imgRandomSourse2);


