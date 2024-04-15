// My Solution

const initiDrumKit = () => {
  const keys = document.querySelectorAll(".keys [data-key]");
  const sounds = document.querySelectorAll("audio");

  function playSound(key) {
    sounds.forEach((s) => {
      if (s.dataset.key === key) {
        s.currentTime = 0;
        s.play();
      }
    });
  }

  function hanldleKeydown(e) {
    const letter = e.key.toUpperCase();
    keys.forEach((key) => {
      if (letter === key.children[0].innerText) {
        playSound(key.dataset.key);
        key.classList.add("playing", "sound");
      }

      this.addEventListener("keyup", () => {
        key.classList.remove("playing");
      });
    });
  }

  addEventListener("keydown", hanldleKeydown);
};

initiDrumKit();

// Original solution

// const initiDrumKit = () => {
//   function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//     if (!key) return;
//     key.classList.add("playing", "sound");

//     if (!audio) return;
//     audio.currentTime = 0;
//     audio.play();
//   }

//   const keys = document.querySelectorAll(".key");

//   function removeTransition(e) {
//     if (e.propertyName !== "transform") return;
//     this.classList.remove("playing");
//   }

//   addEventListener("keydown", playSound);

//   keys.forEach((k) => {
//     k.addEventListener("transitionend", removeTransition);
//   });
// };

// initiDrumKit();
