document.addEventListener("DOMContentLoaded", () => {
  const balloonLayer = document.getElementById("balloonLayer");
  const effects = document.getElementById("cakeEffects");
  const blow = document.getElementById("blowButton");
  const flame = document.getElementById("flame");
  const wish = document.getElementById("wishText");
  const ending = document.getElementById("endingButton");
  let celebrated = false;

  function spawnBalloons() {
    balloonLayer.innerHTML = "";
    const colors = ["#ff6fa8","#ffd166","#8be9fd","#c77dff","#7bf1a8"];
    for (let i = 0; i < 16; i += 1) {
      const balloon = document.createElement("span");
      balloon.className = "balloon";
      balloon.style.left = Math.random() * 94 + "%";
      balloon.style.background = colors[i % colors.length];
      balloon.style.setProperty("--dur", 8 + Math.random() * 6 + "s");
      balloon.style.setProperty("--drift", -90 + Math.random() * 180 + "px");
      balloon.style.animationDelay = Math.random() * 4 + "s";
      balloon.addEventListener("click", () => {
        balloon.textContent = "POP!";
        balloon.style.background = "transparent";
        setTimeout(() => balloon.remove(), 250);
      });
      balloonLayer.appendChild(balloon);
    }
  }

  function smoke() {
    const cake = document.querySelector(".cake").getBoundingClientRect();
    for (let i = 0; i < 18; i += 1) {
      const puff = document.createElement("span");
      puff.className = "smoke";
      const size = 20 + Math.random() * 30;
      puff.style.width = puff.style.height = size + "px";
      puff.style.left = cake.left + cake.width / 2 + (-12 + Math.random() * 24) + "px";
      puff.style.top = cake.top + 20 + Math.random() * 15 + "px";
      puff.style.setProperty("--dx", -80 + Math.random() * 160 + "px");
      effects.appendChild(puff);
      setTimeout(() => puff.remove(), 2800);
    }
  }

  function confetti() {
    const colors = ["#ff6fa8","#ffd166","#8be9fd","#fff","#c77dff"];
    for (let i = 0; i < 150; i += 1) {
      const item = document.createElement("span");
      item.className = "confetti";
      item.style.left = Math.random() * 100 + "vw";
      item.style.width = 6 + Math.random() * 8 + "px";
      item.style.height = 10 + Math.random() * 14 + "px";
      item.style.background = colors[i % colors.length];
      item.style.setProperty("--dur", 3 + Math.random() * 3 + "s");
      item.style.setProperty("--dx", -130 + Math.random() * 260 + "px");
      effects.appendChild(item);
      setTimeout(() => item.remove(), 6500);
    }
  }

  function hearts() {
    const icons = ["❤️","💗","💕","💖"];
    for (let i = 0; i < 60; i += 1) {
      const heart = document.createElement("span");
      heart.className = "flying-heart";
      heart.textContent = icons[i % icons.length];
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = 18 + Math.random() * 28 + "px";
      heart.style.setProperty("--dur", 4 + Math.random() * 3 + "s");
      heart.style.setProperty("--dx", -180 + Math.random() * 360 + "px");
      effects.appendChild(heart);
      setTimeout(() => heart.remove(), 7500);
    }
  }

  function fireworks() {
    for (let i = 0; i < 9; i += 1) {
      setTimeout(() => {
        const dot = document.createElement("span");
        dot.className = "firework-dot";
        dot.style.left = 10 + Math.random() * 80 + "vw";
        dot.style.top = 8 + Math.random() * 42 + "vh";
        effects.appendChild(dot);
        setTimeout(() => dot.remove(), 1800);
      }, i * 430);
    }
  }

  blow.addEventListener("click", () => {
    if (celebrated) return;
    celebrated = true;
    flame.classList.add("is-off");
    smoke(); confetti(); hearts(); fireworks();
    wish.textContent = "Yeay! Semoga semua doamu terkabul ❤️";
    blow.disabled = true;
    blow.textContent = "Permintaanmu Sudah Terkirim ✨";
    setTimeout(() => ending.classList.add("is-visible"), 2200);
  });

  window.addEventListener("scenechange", event => {
    if (event.detail.scene === "cake") spawnBalloons();
  });
});
