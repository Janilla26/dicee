
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;
document.querySelector(".leftdice").setAttribute("src", "images/dice" + randomNumber1 + ".png");
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6)+1;
document.querySelector(".rightdice").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1>randomNumber2) {
  document.querySelector(".title").innerHTML = "Player 1 won. Congrats";
}

else if (randomNumber1<randomNumber2) {
  document.querySelector(".title").innerHTML = "Player 2 won. Congrats";
}

else {
  document.querySelector(".title").innerHTML ="It's a draw. Try again";
}
