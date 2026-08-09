document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("backgroundMusic");
  const toggle = document.getElementById("musicToggle");
  const status = document.getElementById("musicStatus");
  const progress = document.getElementById("musicProgress");
  const enterButton = document.querySelector('[data-next="welcome"]');

  audio.volume = 0.35;

  async function playMusic() {
    try {
      await audio.play();
      toggle.textContent = "❚❚";
      status.textContent = "Sedang diputar";
    } catch (error) {
      toggle.textContent = "♫";
      status.textContent = "Tekan untuk memutar";
    }
  }

  enterButton.addEventListener("click", playMusic, {
    once: true
  });

  toggle.addEventListener("click", async () => {
    if (audio.paused) {
      await playMusic();
    } else {
      audio.pause();
      toggle.textContent = "♫";
      status.textContent = "Musik dijeda";
    }
  });

  audio.addEventListener("timeupdate", () => {
    if (progress && audio.duration) {
      progress.value =
        (audio.currentTime / audio.duration) * 100;
    }
  });
});
