document.addEventListener("DOMContentLoaded", () => {
  const layer = document.getElementById("introStars");
  for (let i = 0; i < 120; i += 1) {
    const star = document.createElement("span");
    star.className = "intro-star";
    const size = 1 + Math.random() * 3;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 78 + "%";
    star.style.animationDelay = Math.random() * 2 + "s";
    layer.appendChild(star);
  }
});
