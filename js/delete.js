var tabela = document.querySelector("tbody");

tabela.addEventListener("click", (event) => {
  let pai = event.target.parentNode;
  let avo = pai.parentNode;

  if (avo.classList.contains("tr-cabecalho")) {
    avo.remove(event.target.parentNode);
  }
});
