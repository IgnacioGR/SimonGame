let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickPattern = [];
let level = 0;

$(".btn").click(function (e) {
  e.preventDefault();
  let userClick = $(this).attr("id");
  userClickPattern.push(userClick);

  makeSound(userClick);
  animatePress(userClick);
});

function nextSequence() {
  let random = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[random];
  gamePattern.push(randomChosenColor);
  level++;

  $("h1").text("Level " + level);

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

$("body").keydown(function (e) {
  if (level === 0) {
    nextSequence();
  }
});
