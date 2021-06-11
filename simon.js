let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickPattern = [];
let level = 0;

$("body").keydown(function (e) {
  if (level === 0) {
    nextSequence();
  }
});

$(".btn").click(function (e) {
  e.preventDefault();
  let userClick = $(this).attr("id");
  userClickPattern.push(userClick);

  makeSound(userClick);
  animatePress(userClick);

  checkAnswer(userClickPattern.length - 1);
});

function nextSequence() {
  userClickPattern = [];

  level++;
  $("h1").text("Level " + level);

  let random = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[random];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  makeSound(randomChosenColor);
}

function makeSound(color) {
  let audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
    if (userClickPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    let audio = new Audio("sounds/wrong.mp3");
    audio.play();

    $("body").addClass("game-over");

    setTimeout(function () {
      $("h1").text("You lost. Your score was " + level + ".");
      $("body").removeClass("game-over");
    }, 200);
  }
}
