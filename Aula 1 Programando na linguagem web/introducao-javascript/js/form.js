var adicionar = document.querySelector('#adicionar-paciente')

adicionar.addEventListener('click', function () {
  event.preventDefault();

  var form = document.querySelector('#form-adiciona')
  
  var paciente = obtemPacienteDoFormulario(form);
  console.log(paciente)

  var erros = validaPaciente(paciente)
  
  if (erros.length>0) {
    exibeMensagensDeErro(erros);
    attPagina();
    return;
}

  adicionaPacienteTabela(paciente);

  form.reset()
  var mensagensErro = document.querySelector("#mensagem-erro")
  mensagensErro.innerHTML = ""

  });

  function adicionaPacienteTabela(paciente){
    var pacienteTr = montaTr(paciente)
    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
    
  }

//função para pegar os inputs do paciente
function obtemPacienteDoFormulario(form){
  
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

//função tr e td no html
function montaTr(paciente){

  var pacienteTr = document.createElement('tr')
  pacienteTr.classList.add("paciente")
    

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

    return pacienteTr;
}


//função para montar td
function montaTd(dado, classe){
  var td = document.createElement("td")
  td.textContent = dado
  td.classList.add(classe)

  return td
}

function calculaImc(peso, altura){
  var imc = 0
  imc = peso/ (altura*altura)
  return imc.toFixed(2)
}

function validaPaciente(paciente) {
  
  var erros= [];
  if ( paciente.nome.length == 0){
    erros.push("O nome do paciente não pode ser em branco")
  }
  if (!validaPeso(paciente.peso))     erros.push("Peso inválido")
  if (!validaAltura(paciente.altura)) erros.push("Altura inválido")
  if ( paciente.gordura.length == 0){
    erros.push("A gordura não pode ser em branco")
  }
  return erros;
}

function exibeMensagensDeErro(erros){
    
  var ul = document.querySelector("#mensagem-erro")
  ul.innerHTML= ""

    erros.forEach(
      function(erro){
      var li = document.createElement("li")
      li.textContent = erro;
      ul.appendChild(li)
    });

}