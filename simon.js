let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickPattern = [];
let level = 0;

// let started = false;

// $("body").keydown(function () {
//   if (started == false) {
//     started = true;
//     nextSequence();
//   }
// });

function nextSequence() {
  console.log("hello");

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

$(".btn").click(function () {
  let userClick = $(this).attr("id");
  userClickPattern.push(userClick);

  makeSound(userClick);
  animatePress(userClick);

  checkAnswer(userClickPattern.length - 1);
});

function makeSound(color) {
  let audio = new Audio("sounds/" + color + ".mp3");
  audio.volume = 0.2;
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
    makeSound("wrong");

    $("body").addClass("game-over");
    $(".new-game").removeClass("hidden");
    $("h1").text("You lost. Your score was " + level + ".");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
}

function newGame() {
  $("h1").text("Level " + level);
  setTimeout(function () {
    $(".new-game").addClass("hidden");
    nextSequence();
  }, 500);
}
