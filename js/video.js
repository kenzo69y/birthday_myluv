document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("memoryVideo");
  const placeholder = document.getElementById("videoPlaceholder");
  const play = document.getElementById("videoPlay");
  const progress = document.getElementById("videoProgress");
  const mute = document.getElementById("videoMute");
  const cinema = document.getElementById("videoCinema");
  const fullscreen = document.getElementById("videoFullscreen");
  const frame = document.getElementById("cinemaFrame");

  function updateVideoPlaceholder() {
  if (video.readyState >= 1) {
    placeholder.style.display = "none";
  } else {
    placeholder.style.display = "grid";
  }
}

video.addEventListener("loadedmetadata", updateVideoPlaceholder);
video.addEventListener("loadeddata", updateVideoPlaceholder);
video.addEventListener("canplay", updateVideoPlaceholder);

video.addEventListener("error", () => {
  placeholder.style.display = "grid";
});

updateVideoPlaceholder();

  play.addEventListener("click", async () => {
    try {
      if (video.paused) {
        await video.play();
        play.textContent = "❚❚";
      } else {
        video.pause();
        play.textContent = "▶";
      }
    } catch (_) {}
  });

  video.addEventListener("timeupdate", () => {
    if (video.duration) progress.value = (video.currentTime / video.duration) * 100;
  });

  progress.addEventListener("input", () => {
    if (video.duration) video.currentTime = (progress.value / 100) * video.duration;
  });

  mute.addEventListener("click", () => {
    video.muted = !video.muted;
    mute.textContent = video.muted ? "🔇" : "🔊";
  });

  cinema.addEventListener("click", () => frame.classList.toggle("is-cinema"));
  fullscreen.addEventListener("click", () => frame.requestFullscreen?.());
});
