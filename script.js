/*
Tabela verdade:
true && true -> true
true && false -> false
false && false -> false

true || true -> true
true || false -> true
false || false -> false
*/

/*
Operadores lógicos:
!false
'1' == 1
'1' != 1
'1' === 1
'1' !== 1
9 > 0
9 >= 0
9 < 10
9 <=10
*/

let nota = Number(prompt('Qual foi a sua nota?'));
let entregouTudo = confirm('O aluno entregou todos os trabalhos?');

/*
If é criado com a seguinte estrutura:

if (CONDICAO) {
  CODIGO A SER EXECUTADO
}
*/

//Vale lembrar que toda condição colocada no if termina em um true ou false
if (nota >= 6 && !entregouTudo) {
  alert ('Parabéns, você foi aprovado, mas da próxima entregue todos os trabalhos.');
}
else if (nota >= 6) {
  alert ('Parabéns, você foi aprovado!');
}
else if (nota >= 5.5 && entregouTudo) {
  alert ('Você foi aprovado, mas agradeça o computador ;)');
}
else {
  alert ('Que pena, você foi reprovado! :(');
}