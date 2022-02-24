var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", function(){
  var xhr = new XMLHttpRequest()
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")
  var erro = document.querySelector("#erro-ajax")

  xhr.addEventListener("load", function(){
    if(xhr.status==200){
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);
      erro.classList.add("invisivel")
      /*console.log(pacientes);
      console.log(typeof pacientes); Transforma o texto em array*/
  
      pacientes.forEach( paciente => {
        adicionaPacienteTabela(paciente)
      });
      console.log(xhr.status);
      console.log(xhr.responseText);
    }else{
      console.log(xhr.status);
      console.log(xhr.responseText);
      
      erro.classList.remove("invisivel")
    }
    
    


  })
  xhr.send();



});

//https://api-pacientes.herokuapp.com/pacientes