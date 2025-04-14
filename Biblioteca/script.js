document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-livro");
  const listaLivros = document.getElementById("lista-livros");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const ano = document.getElementById("ano").value;
    const livroItem = document.createElement("li");
    livroItem.textContent = `${titulo} por ${autor} (${ano})`;
    listaLivros.appendChild(livroItem);
    form.reset(); // Reseta o formulário
  });
});
// Info:
// DOMContentLoaded: Garante que o código JavaScript seja executado apenas após o carregamento completo do DOM.
// form.addEventListener('submit', function(event) { ... }): Adiciona um listener para o evento de envio do formulário e cria um novo item de livro na lista ao enviar o formulário.
// event.preventDefault(): Previne o envio padrão do formulário.
// form.reset(): Reseta o formulário após adicionar o livro à lista.
