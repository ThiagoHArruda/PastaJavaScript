//condicionais

var number = 0
resto = number % 2;

//ou alt +124 = |
//e &&
//resto % 
if (resto == 0 && resto!=0) {
  console.log(`O numero ${number} é par`)
} else if(resto == 1 && resto!=0) {
  console.log(`O numero ${number} é ímpar`)
}else{
  console.log(`O numero ${number} é nulo`)
}
var key = 10
switch (key) {
  case 1:
    console.log("Parou no 1");
    break;
    case 2:
      console.log("Parou no 2");
      break;
  default:
    console.log("não sei onde parou :/");
    break;
}