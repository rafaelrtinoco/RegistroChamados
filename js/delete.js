var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", (event) => {
  event.target.parentNode.remove();  
  
});