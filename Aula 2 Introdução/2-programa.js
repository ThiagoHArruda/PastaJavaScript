//exemplo de looping
idade = 20;

for (let index = 0; index < 10; index++) {
  idade = idade +2;
}
console.log(idade);

var anoNascimento = 2000

do {
  anoNascimento = anoNascimento+1
} while (anoNascimento<2020);

console.log(anoNascimento);
//vale lembrar q
do {
  anoNascimento = anoNascimento-1
} while (anoNascimento>=2000);
console.log(anoNascimento);


while (idade>20) {
  idade = idade-1
}
console.log(idade);