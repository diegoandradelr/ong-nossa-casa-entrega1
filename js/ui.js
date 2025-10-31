// ============================
// UI.JS — Interações Visuais
// ============================

export function initUI() {
  const btnMenu = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu ul");

  if (btnMenu && menu) {
    btnMenu.addEventListener("click", () => {
      menu.classList.toggle("ativo");
    });
  }

  // Feedback visual simples para alertas e modais
  const alerts = document.querySelectorAll(".alert");
  alerts.forEach(alert => {
    setTimeout(() => alert.classList.add("hide"), 4000);
  });

    const toggleContrast = document.createElement("button");
  toggleContrast.textContent = "Modo alto contraste";
  toggleContrast.id = "toggle-contrast";
  toggleContrast.style.position = "fixed";
  toggleContrast.style.bottom = "20px";
  toggleContrast.style.right = "20px";
  toggleContrast.style.padding = "10px 20px";
  toggleContrast.style.border = "none";
  toggleContrast.style.background = "#333";
  toggleContrast.style.color = "#fff";
  toggleContrast.style.cursor = "pointer";
  toggleContrast.style.zIndex = "1000";
  document.body.appendChild(toggleContrast);

  toggleContrast.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
  });
}
