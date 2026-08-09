document.addEventListener("DOMContentLoaded", () => {
  const message = `Terima kasih sudah hadir di hidupku.

Semoga kedepannya kita bisa merayakan ulang tahunmu setiap tahun bersama, dengan lebih banyak tawa, cerita, dan kenangan indah.

Apa pun yang terjadi nanti, semoga kamu selalu ingat bahwa kamu sangat berarti dan selalu dicintai.`;

  const target = document.getElementById("endingTyping");
  const fireworksLayer = document.getElementById("endingFireworks");
  const credits = document.getElementById("creditsScreen");
  let started = false;

  function fireworkLoop() {
    const dot = document.createElement("span");
    dot.className = "firework-dot";
    dot.style.left = 12 + Math.random() * 76 + "vw";
    dot.style.top = 10 + Math.random() * 48 + "vh";
    fireworksLayer.appendChild(dot);
    setTimeout(() => dot.remove(), 1800);
  }

  window.addEventListener("scenechange", event => {
    if (event.detail.scene !== "ending" || started) return;
    started = true;
    let index = 0;
    const timer = setInterval(() => {
      target.textContent += message[index++] || "";
      if (index >= message.length) clearInterval(timer);
    }, 30);

    for (let i = 0; i < 8; i += 1) setTimeout(fireworkLoop, i * 600);
  });

  document.getElementById("creditsButton").addEventListener("click", () => credits.classList.add("is-visible"));
  document.getElementById("creditsClose").addEventListener("click", () => credits.classList.remove("is-visible"));
});
