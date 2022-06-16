var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomDiceImg = "dice" + randomNumber1 + ".png"; // "dice1.png - dice6.png"

var randomImgSource = "images/" + randomDiceImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSource);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImgSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏳‍🌈Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🏳‍🌈";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
