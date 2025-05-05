// ハンバーガーメニューの開閉制御

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".js-menu-toggle");
  const nav = document.querySelector(".js-nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
    menuToggle.classList.toggle("is-active"); // アニメーション用（任意）
  });
});
