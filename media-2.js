//Solução alternativa 02 para o exercício de aprovação de aluno, colocando a pergunta dos trabalhos somente se ele tem nota para ser aprovado

let nota = Number(prompt('Qual foi a sua nota?'));

if (nota < 5.5) {
  alert('Que pena, você foi reprovado! :(');
}
else {
  let entregouTudo = confirm('O aluno entregou todos os trabalhos?');

  if (entregouTudo) {
    if (nota >= 6) {
      alert('Parabéns, você foi aprovado!');
    }
    else {
      alert('Você foi aprovado, mas agradeça o computador ;)');
    }
  }
  else {
    if (nota >= 6) {
      alert('Parabéns, você foi aprovado, mas da próxima entregue todos os trabalhos.');
    }
    else {
      alert('Que pena, você foi reprovado! :(');
    }
  }
}