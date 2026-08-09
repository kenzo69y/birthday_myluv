document.addEventListener("DOMContentLoaded", () => {
  const pages = [...document.querySelectorAll(".book-page")];
  const prev = document.getElementById("bookPrev");
  const next = document.getElementById("bookNext");
  const indicator = document.getElementById("bookIndicator");
  const cont = document.getElementById("bookContinue");
  let index = 0;

  function render() {
    pages.forEach((page, i) => {
      page.classList.toggle("is-current", i === index);
      page.classList.toggle("is-past", i < index);
    });
    indicator.textContent = `${index + 1} / ${pages.length}`;
    prev.disabled = index === 0;
    next.disabled = index === pages.length - 1;
    cont.classList.toggle("is-visible", index === pages.length - 1);
  }

  prev.addEventListener("click", () => { if (index > 0) { index -= 1; render(); } });
  next.addEventListener("click", () => { if (index < pages.length - 1) { index += 1; render(); } });
  render();
});
