const botaoRegistra = document.querySelector(".botao-registrar");
botaoRegistra.addEventListener("click", (event) => {
  event.preventDefault();

  let form = document.querySelector(".form-adiciona");

  let chamado = obtemDadosChamado (form)

  console.log(chamado)
})



function obtemDadosChamado(form) {

  let chamado ={
    siglaFilial: form.sigla.value,
    operadora: form.operadora.value,
    sla: form.sla.value,
    descricao: form.descricao.value
  }
  return chamado;
}