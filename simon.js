let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
  let random = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[random];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeIn(50)
    .fadeOut(50)
    .fadeIn(50);

  let audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}

nextSequence();
