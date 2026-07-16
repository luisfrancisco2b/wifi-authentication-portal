// 1 - Select the form element using querySelector
const form = document.querySelector("form");
const inputMatricula = document.querySelector("#matricula");
const inputCpf = document.querySelector("#cpf");
const btnToggleSenha = document.querySelector("#btn-toggle-senha");
const btnContinue = document.querySelector("#btn-continue");

// New elements for the loading simulation
const btnText = document.querySelector("#btn-text");
const spinner = document.querySelector("#spinner");

// 2 - Add an event listener for the form submission
btnContinue.addEventListener("click", function (e) {
  // Basic validation: check if either fields is empty (ignoring whitespacing)
  if (inputMatricula.value.trim() === "" || inputCpf.value.trim() === "") {
    // Prevent the form from submitting and reloading the page
    e.preventDefault();

    // Display a warning message to the user
    alert("Por favor, preencha os campos de Matrícula e CPF para se conectar.");

    // Stop execution here if fields are empty
    return;
  }

  // If validation passes, simulate the loading process
  e.preventDefault();

  // Disable the button and update text/visuals
  btnContinue.disabled = true;
  btnText.textContent = "Conectando...";
  spinner.classList.remove("class-hidden");

  // Simulate a 2-second network request before finally submitting
  setTimeout(function () {
    alert("Conectado com sucesso! Redirecionando...");
    form.submit();
  }, 2000);
});

// 3 - Add a click event listener to the toggle button using emojis
btnToggleSenha.addEventListener("click", function () {
  if (inputCpf.type === "password") {
    inputCpf.type = "text";
    btnToggleSenha.textContent = "Esconder CPF";
  } else {
    inputCpf.type = "password";
    btnToggleSenha.textContent = "Mostrar CPF";
  }
});
