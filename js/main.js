const botaoRegistra = document.querySelector(".botao-registrar");
botaoRegistra.addEventListener("click", (event) => {
  event.preventDefault();

  let form = document.querySelector(".form-adiciona");

  let chamado = obtemDadosChamado (form);    

  let erros = validaCampos(chamado);

  if(erros.length > 0) {
    exibeMensagemErro(erros);
    return;
  }

  adicionaChamadoNaTabela(chamado);

  form.reset();
  var limpaErro = document.querySelector(".mensagem");
  limpaErro.innerHTML = "";  

  let date = new Date().toLocaleString();
  
  
})

function adicionaChamadoNaTabela (chamado) {
  let chamadoTr = montaTr(chamado);
  let tabela = document.querySelector("#tabela-chamados");
  tabela.appendChild(chamadoTr);
}

function exibeMensagemErro(erros) {
  let ul = document.querySelector(".mensagem");
  ul.innerHTML = ""; // quando realizar novo teste vai zerar a ul.
  erros.forEach(recebeErro => {
    let li = document.createElement("li")
    li.textContent = recebeErro;
    ul.appendChild(li);
  })
}

function obtemDadosChamado(form) {

  let chamado ={
    siglaFilial: form.sigla.value,
    operadora: form.operadora.value,
    solicitante: form.solicitante.value,
    sla: form.sla.value,
    dataAbertura: new Date().toLocaleString(),
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
  chamadoTr.appendChild(criaTd(chamado.solicitante, "info-solicitante"));
  chamadoTr.appendChild(criaTd(chamado.sla, "info-sla"));
  chamadoTr.appendChild(criaTd(chamado.dataAbertura, "info-abertura"));
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

function validaCampos(chamado) {
  let erros = [] ;
  
  if(chamado.siglaFilial.length == 0) erros.push("Campo Filial deve ser preenchido.");
  if(chamado.operadora.length == 0) erros.push("Campo Operadora deve ser preenchido.");
  if(chamado.sla.length == 0) erros.push("Campo SLA deve ser preenchido.");
  if(chamado.descricao.length == 0) erros.push("Campo Descrição deve ser preenchido.");
  if(chamado.chamado.length == 0) erros.push("Campo Chamado deve ser preenchido.");  

  return erros;

}
