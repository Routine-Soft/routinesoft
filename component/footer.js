function loadFooter() {
  fetch("/component/footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch((err) => console.error("Erro ao carregar o footer:", err));
}

document.addEventListener("DOMContentLoaded", loadFooter);
