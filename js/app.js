window.BirthdayApp = (() => {
  const scenes = [...document.querySelectorAll(".scene")];
  let current = "loading";

  function show(name) {
    scenes.forEach(scene => scene.classList.toggle("is-active", scene.dataset.scene === name));
    current = name;
    window.dispatchEvent(new CustomEvent("scenechange", { detail: { scene: name } }));
  }

  function bindNavigation() {
    document.querySelectorAll("[data-next]").forEach(button => {
      button.addEventListener("click", () => show(button.dataset.next));
    });

    document.querySelectorAll("[data-back]").forEach(button => {
      button.addEventListener("click", () => show(button.dataset.back));
    });
  }

  function startLoading() {
    const bar = document.getElementById("loadingBar");
    const text = document.getElementById("loadingPercent");
    let value = 0;

    const timer = setInterval(() => {
      value += Math.floor(Math.random() * 9) + 3;
      if (value >= 100) {
        value = 100;
        clearInterval(timer);
        setTimeout(() => show("intro"), 450);
      }
      bar.style.width = value + "%";
      text.textContent = value + "%";
    }, 90);
  }

  function restart() {
    show("loading");
    window.scrollTo(0, 0);
    location.reload();
  }

  document.addEventListener("DOMContentLoaded", () => {
    bindNavigation();
    startLoading();
    document.getElementById("restartButton").addEventListener("click", restart);
  });

  return { show, restart, getCurrent: () => current };
})();
