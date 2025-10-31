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
}
