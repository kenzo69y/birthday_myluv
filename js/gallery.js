document.addEventListener("DOMContentLoaded", () => {
  const cards = [...document.querySelectorAll(".polaroid")];
  const lightbox = document.getElementById("lightbox");
  const image = document.getElementById("lightboxImage");
  const caption = document.getElementById("lightboxCaption");
  const close = document.getElementById("lightboxClose");

  cards.forEach(card => {
    let dragging = false;
    let startX = 0, startY = 0, baseX = 0, baseY = 0;

    card.addEventListener("pointerdown", event => {
      dragging = true;
      startX = event.clientX;
      startY = event.clientY;
      card.setPointerCapture(event.pointerId);
      card.style.zIndex = 50;
    });

    card.addEventListener("pointermove", event => {
      if (!dragging) return;
      baseX += event.movementX;
      baseY += event.movementY;
      card.style.transform = `translate(${baseX}px,${baseY}px) rotate(${getComputedStyle(card).getPropertyValue("--r")})`;
    });

    card.addEventListener("pointerup", event => {
      const moved = Math.abs(event.clientX - startX) + Math.abs(event.clientY - startY);
      dragging = false;
      if (moved < 8) {
        image.src = card.querySelector("img").src;
        caption.textContent = card.querySelector("figcaption").textContent;
        lightbox.classList.add("is-visible");
      }
    });
  });

  close.addEventListener("click", () => lightbox.classList.remove("is-visible"));
  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) lightbox.classList.remove("is-visible");
  });
});
