const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("mobile-nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  toggle.innerHTML = nav.classList.contains("open")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});
