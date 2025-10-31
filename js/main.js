console.log("main.js carregado com sucesso!");

// ============================
// MAIN.JS — Ponto de Entrada Principal
// ============================

import { initUI } from "./ui.js";
import { initFormValidation } from "./form-validation.js";
import { initSPA } from "./spa.js";

document.addEventListener("DOMContentLoaded", () => {
  initUI();
  initFormValidation();
  initSPA();
});
