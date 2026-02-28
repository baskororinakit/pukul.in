function playDrum(
  drumElement,
  soundElement,
  activeDrum,
  normalDrum,
  allowRestart = true,
) {
  if (allowRestart) {
    soundElement.currentTime = 0;
  } else {
    if (!soundElement.paused) return;
  }

  soundElement.play();

  drumElement.src = activeDrum;

  setTimeout(() => {
    drumElement.src = normalDrum;
  }, 400);
}

// element element drums / kit drums
const drums = {
  leftKick: {
    element: document.getElementById("left-kick"),
    sound: document.getElementById("kick-sound"),
    active: "assets/images/drum-active/kick-active.png",
    normal: "assets/images/drum-images/kick.png",
  },

  rightKick: {
    element: document.getElementById("right-kick"),
    sound: document.getElementById("kick-sound"),
    active: "assets/images/drum-active/kick-active.png",
    normal: "assets/images/drum-images/kick.png",
  },

  snare: {
    element: document.getElementById("snare-drum"),
    sound: document.getElementById("snare-sound"),
    active: "assets/images/drum-active/snare-active.png",
    normal: "assets/images/drum-images/snare.png",
  },

  hihatClose: {
    element: document.getElementById("hihat-close"),
    sound: document.getElementById("hihatCloseSound"),
    active: "assets/images/drum-active/hihat-close-active.png",
    normal: "assets/images/drum-images/hihat-close-open.png",
  },

  hihatOpen: {
    element: document.getElementById("hihat-open"),
    sound: document.getElementById("hihatOpenSound"),
    active: "assets/images/drum-active/hihat-open-active.png",
    normal: "assets/images/drum-images/hihat-close-open.png",
  },
};
const hihatOpenSound = drums.hihatOpen.sound;
const hihatCloseSound = drums.hihatClose.sound;

// Keyboard Mapping
document.addEventListener("keydown", function (e) {
  if (e.key === "c" || e.key === "v") {
    const drum = drums.snare;
    playDrum(drum.element, drum.sound, drum.active, drum.normal);
  }

  if (e.key === "b") {
    const drum = drums.leftKick;
    playDrum(drum.element, drum.sound, drum.active, drum.normal);
  }

  if (e.key === "n") {
    const drum = drums.rightKick;
    playDrum(drum.element, drum.sound, drum.active, drum.normal);
  }

  if (e.key === "z") {
    // CHOKE open
    drums.hihatOpen.sound.pause();
    drums.hihatOpen.sound.currentTime = 0;

    const drum = drums.hihatClose;
    playDrum(drum.element, drum.sound, drum.active, drum.normal);
  }

  if (e.key === "x") {
    const drum = drums.hihatOpen;
    playDrum(drum.element, drum.sound, drum.active, drum.normal);
  }
});

Object.values(drums).forEach((drum) => {
  drum.element.addEventListener("click", () => {
    playDrum(drum.element, drum.sound, drum.active, drum.normal);
  });
});

drums.hihatClose.element.addEventListener("click", () => {
  hihatOpenSound.pause();
  hihatOpenSound.currentTime = 0;

  playDrum(
    drums.hihatClose.element,
    drums.hihatClose.sound,
    drums.hihatClose.active,
    drums.hihatClose.normal,
  );
});

drums.hihatOpen.element.addEventListener("click", () => {
  if (hihatOpenSound.paused) {
    playDrum(
      drums.hihatOpen.element,
      drums.hihatOpen.sound,
      drums.hihatOpen.active,
      drums.hihatOpen.normal,
    );
  }
});
