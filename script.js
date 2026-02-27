// Element drum
const leftKickDrum = document.getElementById("left-kick");
const rightKickDrum = document.getElementById("right-kick");
const snareDrum = document.getElementById("snare-drum");

// AUDIO KIT DRUM
const kickSound = document.getElementById("kick-sound");
const snareSound = document.getElementById("snare-sound");

// SNARE
function playSnare() {
  snareSound.currentTime = 0;
  snareSound.play();

  snareDrum.src = "assets/images/drum-active/snare-active.png";

  setTimeout(() => {
    snareDrum.src = "assets/images/drum-images/snare.png";
  }, 100);
}

// KICK
function playLeftKick() {
  kickSound.currentTime = 0;
  kickSound.play();

  leftKickDrum.src = "assets/images/drum-active/kick-active.png";

  setTimeout(() => {
    leftKickDrum.src = "assets/images/drum-images/kick.png";
  }, 100);
}

function playRightKick() {
  kickSound.currentTime = 0;
  kickSound.play();

  rightKickDrum.src = "assets/images/drum-active/kick-active.png";

  setTimeout(() => {
    rightKickDrum.src = "assets/images/drum-images/kick.png";
  }, 100);
}

leftKickDrum.addEventListener("click", playLeftKick);
rightKickDrum.addEventListener("click", playRightKick);
snareDrum.addEventListener("click", playSnare);

document.addEventListener("keydown", function (e) {
  if (e.key === "c" || e.key === "v") {
    playSnare();
  }

  if (e.key === "b") {
    playLeftKick();
  }

  if (e.key === "n") {
    playRightKick();
  }
});
