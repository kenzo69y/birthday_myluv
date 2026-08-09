document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.getElementById("cursorLayer");
  let tick = 0;

  document.addEventListener("pointermove", event => {
    tick += 1;
    if (tick % 3 !== 0) return;
    const particle = document.createElement("span");
    particle.className = "cursor-particle";
    particle.textContent = ["✦","✨","♡","🌸"][Math.floor(Math.random() * 4)];
    particle.style.left = event.clientX + "px";
    particle.style.top = event.clientY + "px";
    particle.style.setProperty("--dx", -24 + Math.random() * 48 + "px");
    particle.style.setProperty("--dy", -20 - Math.random() * 38 + "px");
    cursor.appendChild(particle);
    setTimeout(() => particle.remove(), 850);
  });

  setInterval(() => {
    const petal = document.createElement("span");
    petal.className = "sakura";
    petal.textContent = Math.random() > .2 ? "🌸" : "♡";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = 14 + Math.random() * 22 + "px";
    petal.style.setProperty("--dur", 7 + Math.random() * 5 + "s");
    petal.style.setProperty("--drift", -160 + Math.random() * 320 + "px");
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 12500);
  }, 500);
});
