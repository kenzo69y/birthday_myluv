document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const readButton = document.getElementById("readLetterButton");
  let opened = false;
  let startY = 0;

  function openEnvelope() {
    if (opened) return;
    opened = true;
    envelope.classList.add("is-open");
    setTimeout(() => readButton.classList.add("is-visible"), 900);
  }

  envelope.addEventListener("click", openEnvelope);
  envelope.addEventListener("pointerdown", event => {
    startY = event.clientY;
    envelope.setPointerCapture(event.pointerId);
  });
  envelope.addEventListener("pointerup", event => {
    if (startY - event.clientY > 25) openEnvelope();
  });

  const text = `Selamat ulang tahun, Sayang.

Walaupun saat ini jarak memisahkan kita, tidak pernah ada satu hari pun ketika kamu terasa jauh dari hatiku. Mungkin aku belum bisa berada di sampingmu, menggenggam tanganmu, atau merayakan hari spesial ini bersamamu secara langsung. Namun, doa dan rasa sayangku selalu sampai kepadamu, melewati sejauh apa pun jarak di antara kita.

Terima kasih karena tetap bertahan, percaya, dan menjaga hubungan kita. LDR memang tidak selalu mudah. Ada banyak rindu yang hanya bisa disampaikan melalui pesan, banyak pelukan yang harus ditunda, dan banyak cerita yang hanya bisa kita bagikan melalui layar. Namun, semua itu membuatku semakin yakin bahwa kamu adalah seseorang yang pantas untuk aku tunggu dan perjuangkan.

Di hari ulang tahunmu ini, aku berdoa semoga kamu selalu diberikan kesehatan, kebahagiaan, keberhasilan, dan kekuatan untuk meraih semua impianmu. Semoga setiap langkahmu selalu dilindungi dan semua hal baik datang menghampirimu.

Percayalah, jarak ini hanya sementara. Suatu hari nanti, kita tidak perlu lagi mengucapkan rindu melalui telepon. Aku akan berada di sampingmu, memelukmu, dan mengganti semua waktu yang pernah kita lewatkan berjauhan.

Selamat ulang tahun, Mia Ramadani. Tetaplah menjadi rumah yang selalu ingin kutuju, sejauh apa pun aku berada.

Aku mencintaimu, dari jauh, dengan sungguh-sungguh, sampai nanti jarak tidak lagi menjadi bagian dari cerita kita. ❤️`;

  let typed = false;
  window.addEventListener("scenechange", event => {
    if (event.detail.scene !== "letter" || typed) return;
    typed = true;
    const target = document.getElementById("letterTyping");
    const next = document.getElementById("letterNextButton");
    let index = 0;

    function type() {
      if (index >= text.length) {
        next.classList.add("is-visible");
        return;
      }
      target.textContent += text[index++];
      setTimeout(type, 28);
    }
    type();
  });
});
