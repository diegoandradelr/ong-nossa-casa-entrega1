// ============================
// FORM-VALIDATION.JS — Validação de Formulário
// ============================

export function initFormValidation() {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    const nome = form.querySelector("#nome");
    const email = form.querySelector("#email");
    const cpf = form.querySelector("#cpf");
    const telefone = form.querySelector("#telefone");
    const nascimento = form.querySelector("#nascimento");

    clearErrors(form);

    if (!nome.value.trim()) showError(nome, "O nome é obrigatório."), isValid = false;
    if (!validateEmail(email.value)) showError(email, "E-mail inválido."), isValid = false;
    if (!validateCPF(cpf.value)) showError(cpf, "CPF inválido."), isValid = false;
    if (!validatePhone(telefone.value)) showError(telefone, "Telefone inválido."), isValid = false;
    if (!nascimento.value) showError(nascimento, "Informe sua data de nascimento."), isValid = false;

    if (isValid) {
      alert("Cadastro realizado com sucesso!");
      form.reset();
    }
  });
}

function showError(input, message) {
  const error = document.createElement("small");
  error.className = "error-message";
  error.style.color = "red";
  error.textContent = message;
  input.insertAdjacentElement("afterend", error);
}

function clearErrors(form) {
  form.querySelectorAll(".error-message").forEach(el => el.remove());
}

function validateEmail(email) {
  return /^[\w-.]+@[\w-]+\.[a-z]{2,}$/.test(email);
}

function validatePhone(phone) {
  const clean = phone.replace(/\D/g, "");
  return clean.length >= 10 && clean.length <= 11;
}

function validateCPF(cpf) {
  const clean = cpf.replace(/\D/g, "");
  if (clean.length !== 11 || /^([0-9])\1+$/.test(clean)) return false;
  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(clean[i]) * (10 - i);
  let resto = 11 - (soma % 11);
  if (resto >= 10) resto = 0;
  if (resto != clean[9]) return false;
  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(clean[i]) * (11 - i);
  resto = 11 - (soma % 11);
  if (resto >= 10) resto = 0;
  return resto == clean[10];
}
