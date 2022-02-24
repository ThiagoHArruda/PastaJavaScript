var tabela = document.querySelector('#tabela-pacientes')

  tabela.addEventListener("dblclick", function(event){
    console.log("Fui clicado duas vezes ^^")
    event.target.parentNode.classList.add("fadeOut")
    setTimeout(() => { 
      event.target.parentNode.remove();
    },450)
    
  })

