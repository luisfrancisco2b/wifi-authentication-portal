// 1 - Select the form element using querySelector
const form = document.querySelector("form");
const inputMatricula = document.querySelector("#matricula");
const inputCpf = document.querySelector("#cpf");
const btnToggleSenha = document.querySelector("#btn-toggle-senha");

// 2 - Add an event listener for the form submission
form.addEventListener("submit", function (e) {
  // Basic validation: check if either fields is empty (ignoring whitespacing)
  if (inputMatricula.value.trim() === "" || inputCpf.value.trim() === "") {
    // Prevent the form from submitting and reloading the page
    e.preventDefault();

    // Display a warning message to the user
    alert("Por favor, preencha os campos de Matrícula e CPF para se conectar.");
  }
});

// 3 -
btnToggleSenha.addEventListener("click", function () {
  if (inputCpf.type === "password") {
    inputCpf.type = "text";
    btnToggleSenha.textContent = "🙈";
  } else {
    inputCpf.type = "pasword";
    btnToggleSenha.textContent = "👁️";
  }
});
