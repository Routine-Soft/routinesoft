// component/ads.js
function loadAds() {
  fetch("/component/ads.html")
    .then(response => response.text())
    .then(html => {
      const container = document.getElementById("ads-container");
      if (!container) return;
      container.innerHTML = html;
      initAdsCarousel(container);
    })
    .catch(error => console.error("Erro ao carregar o banner:", error));
}

function initAdsCarousel(root = document) {
  const banner = root.querySelector(".ads-banner");
  if (!banner) return;

  const slides = banner.querySelectorAll("a");
  if (!slides.length) return;

  let current = 0;

  // só o primeiro ativo
  slides.forEach((slide, i) => slide.classList.toggle("active", i === 0));

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 5000); // troca a cada 5s
}

document.addEventListener("DOMContentLoaded", loadAds);
