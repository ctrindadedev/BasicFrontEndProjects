const senhaExibida = document.getElementById("senha");
const feedbackExibido = document.getElementById("feedback");

const mostrarFeedback = (mensagem, tipo) => {
  feedbackExibido.textContent = mensagem;
  feedbackExibido.style.color = tipo === "erro" ? "red" : "green";
  feedbackExibido.style.fontWeight = "bold";
};
const gerarSenha = (comprimento, opcoes) => {
  if (comprimento <= 0) {
    mostrarFeedback(
      "Inválido! Para genhar uma senha, é necessário inserir um número maior que 0",
      "erro"
    );
    return null;
  }

  let caracteres = "";
  if (opcoes.maiusculas) {
    caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (opcoes.minusculas) {
    caracteres += "abcdefghijklmnopqrstuvwxyz";
  }
  if (opcoes.numeros) {
    caracteres += "0123456789";
  }
  if (opcoes.especiais) {
    caracteres += "!@#$%^&*()_+[]{}|;:,.<>?";
  }
  if (caracteres.length == 0) {
    mostrarFeedback(
      "Inválido! Para genhar uma senha, é necessário marcar pelo menos uma das opções!",
      "erro"
    );
    return null;
  }
  let senha = "";
  for (let i = 0; i < comprimento; i++) {
    //Math.random() gera um número entre 0 e 1, sem incluir 1, e, quando multiplicado pelo comprimento do array, é dimensionado para o intervalo do array. Math.floor()Em seguida, é usado para arredondar para baixo, para o número inteiro mais próximo, garantindo que o índice seja válido.
    let indice = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[indice];
  }
  mostrarFeedback("Senha gerada com sucesso!", "sucesso");
  return senha;
};

document.getElementById("gerar").addEventListener("click", function () {
  const boolMaiusculas = document.getElementById("maiusculas").checked;
  const boolMinusculas = document.getElementById("minusculas").checked;
  const boolEspeciais = document.getElementById("especiais").checked;
  const boolNumbers = document.getElementById("numeros").checked;
  let comprimento = document.getElementById("comprimento").value;
  let senha = gerarSenha(comprimento, {
    maiusculas: boolMaiusculas,
    minusculas: boolMinusculas,
    numeros: boolNumbers,
    especiais: boolEspeciais,
  });
  if (senha) {
    senhaExibida.textContent = senha;
    document.getElementById("copiar").style.display = "inline";
  }
});

document.getElementById("copiar").addEventListener("click", function () {
  let senha = document.getElementById("senha").textContent;
  if (senha.length < 1) {
    mostrarFeedback("Não é possível copiar uma senha inválida!", "erro");
    return null;
  }
  navigator.clipboard.writeText(senha).then(function () {
    mostrarFeedback("Senha copiada para a área de transferência!", "sucesso");
  });
});
