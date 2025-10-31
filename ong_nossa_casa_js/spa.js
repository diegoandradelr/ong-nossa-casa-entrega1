// ============================
// SPA.JS — Single Page Application Simples
// ============================

export function initSPA() {
  const links = document.querySelectorAll(".menu a");
  const main = document.querySelector("main");

  if (!links || !main) return;

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      // Evita recarregar se for a mesma página
      if (href === "#" || href.startsWith("http")) return;

      e.preventDefault();
      fetch(href)
        .then(res => res.text())
        .then(data => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, "text/html");
          const content = doc.querySelector("main").innerHTML;
          main.innerHTML = content;
          window.scrollTo(0, 0);
        })
        .catch(err => console.error("Erro ao carregar a página:", err));
    });
  });
}
