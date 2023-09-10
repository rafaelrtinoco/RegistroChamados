const botaoRegistra = document.querySelector(".botao-registrar");
botaoRegistra.addEventListener("click", (event) => {
  event.preventDefault();

  let form = document.querySelector(".form-adiciona");

  let chamado = obtemDadosChamado (form);  

  adicionaChamadoNaTabela(chamado);

  form.reset();
})

function adicionaChamadoNaTabela (chamado) {
  let chamadoTr = montaTr(chamado);
  let tabela = document.querySelector("#tabela-chamados");
  tabela.appendChild(chamadoTr);
}


function obtemDadosChamado(form) {

  let chamado ={
    siglaFilial: form.sigla.value,
    operadora: form.operadora.value,
    sla: form.sla.value,
    descricao: form.descricao.value,
    chamado: form.chamado.value
  }
  return chamado;
  
}

function montaTr (chamado) {
  let chamadoTr = document.createElement("tr");
  chamadoTr.classList.add("tr-cabecalho");

  chamadoTr.appendChild(criaTd(chamado.siglaFilial, "info-sigla")); 
  chamadoTr.appendChild(criaTd(chamado.operadora, "info-operadora"));
  chamadoTr.appendChild(criaTd(chamado.sla, "info-sla"));
  chamadoTr.appendChild(criaTd(chamado.descricao, "info-descricao"));
  chamadoTr.appendChild(criaTd(chamado.chamado, "info-chamado"));
  chamadoTr.appendChild(criaTdFinalizar("info-finalizar"));

  return chamadoTr;

}

function criaTd (dadoChamado, classe) {
  let td = document.createElement("td");
  td.textContent = dadoChamado;
  td.classList.add(classe);

  return td;
}

function criaTdFinalizar (classe) {
  let tdFinalizar = document.createElement("td");
  let botaoFinalizar = document.createElement("button");
  botaoFinalizar.classList.add("estiloBtn")
  botaoFinalizar.textContent = 'Fechar';
  tdFinalizar.innerHTML = botaoFinalizar.outerHTML;
  tdFinalizar.classList.add(classe);

  return tdFinalizar;

}
