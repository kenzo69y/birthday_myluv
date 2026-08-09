document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("backgroundMusic");
  audio.volume = 0.35;
  const toggle = document.getElementById("musicToggle");
  const status = document.getElementById("musicStatus");
  const progress = document.getElementById("musicProgress");

  toggle.addEventListener("click", async () => {
    try {
      if (audio.paused) {
        await audio.play();
        toggle.textContent = "❚❚";
        status.textContent = "Sedang diputar";
      } else {
        audio.pause();
        toggle.textContent = "♫";
        status.textContent = "Musik dijeda";
      }
    } catch (_) {
      status.textContent = "Masukkan background.mp3";
    }
  });

  audio.addEventListener("timeupdate", () => {
    if (audio.duration) progress.value = (audio.currentTime / audio.duration) * 100;
  });

  progress.addEventListener("input", () => {
    if (audio.duration) audio.currentTime = (progress.value / 100) * audio.duration;
  });
});
