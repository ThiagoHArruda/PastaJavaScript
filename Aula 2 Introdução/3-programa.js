//array

const listaTeste = new Array(
  'Pipoca',
  'Voadora',
  'Maníaca'
);
//adicionar no array
listaTeste.push('Perturbada')

console.log(listaTeste);

//retirar do array
listaTeste.splice(1,1)

console.log(listaTeste);
var texto = ""
for (let index = 0; index < listaTeste.length; index++) {
  texto += listaTeste[index]+ " ";
}

console.log(texto);