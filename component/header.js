function loadHeader() {
  fetch("/component/header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
    })
    .catch((err) => console.error("Erro ao carregar o header:", err));
}

document.addEventListener("DOMContentLoaded", loadHeader);

// Abre e fecha o menu mobile
function toggleMenu() {
  const nav = document.getElementById("mobile-nav");
  nav.classList.toggle("show");
}
