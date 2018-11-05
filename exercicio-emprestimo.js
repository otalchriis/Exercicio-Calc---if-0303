/*
Você trabalha em uma financeira. É necessário escrever um programa que avalie um empréstimo. As entradas do programa são: a renda do cliente, a idade do cliente e o valor que ele deseja emprestar.
Regras para aprovar um empréstimo:
- Emprestamos para pessoas que tenham entre 25 e 65 anos;
- Renda mínima para empréstimo é de R$1500,00 ou mais;
- O valor do empréstimo deve estar entre R$1000,00 e 10 vezes a renda declarada;
Seu programa deve responder "APROVADO!" ou "NÃO APROVADO!" de acordo com cliente;
Bônus: Se o empréstimo for aprovado, perguntamos em quantas parcelas ele quer pagar. 
Regras para parcela:
- Parcelamos entre 5 e 24 meses;
- Mostrar o valor da parcela (com taxa de juro composto de 8%) e a quantidade de parcelas para pagamento;
- Se o valor de parcelas for inválido e o valor for menor que 5, o empréstimo é feito em 5 parcelas;
- Se o valor de parcelas for inválido e o valor for maior que 24, o empréstimo é feito em 24 parcelas;
*/

// const idade = Number(prompt("Qual a sua idade?"));
// const renda = Number(prompt("Qual a sua renda?"));
// const valoeDoEmprestimo = Number(prompt("Qual o valor do emprestimo?"));

// if(idade >= 25 && idade <= 65 && 
//     renda >= 1500 &&
//     valoeDoEmprestimo >=1000 && valoeDoEmprestimo <= renda*10) {
//     alert("APROVADO")

// }

// else{
//     alert("NÃO APROVADO")
// }   


// AVISO A CADA APROVACAO OU REJEICAO
// if (idade <25 || idade >65) {
//     alert(`Sua idade ${idade} é incompativel`)
// }

// else if (renda < 1500) {
//     alert (`Sua renda precisa ser igual ou maior que 1500, a renda digitada foi R$${renda}`)
// }

// else if (valoeDoEmprestimo <1000 || valoeDoEmprestimo > renda *10){
//     alert(`O valor solicitado para emprestimo é de R$${valoeDoEmprestimo} e não pode ser emprestad, favor entrar em contato com o banco`)
// }

// else{
//     alert("PARABÉNS!, seu empréstimo foi aprovado!")
// }

// SOLUÇÃO 3 COM BONUS
const idade = Number(prompt('Qual sua idade?'));

if (idade >= 25 && idade <= 65) {
  const renda = Number(prompt('Qual sua renda?'));

  if (renda >= 1500) {
    const valorEmprestimo = Number(prompt('Qual valor do empréstimo?'));

    if (valorEmprestimo >= 1000 && valorEmprestimo <= renda * 10) {
      alert('Parabéns! Seu empréstimo foi aprovado :)');

      let quantidadeDeParcelas = Number(prompt('Em quantas parcelas você gostaria de pagar seu empréstimo? Aceitamos acordos entre 5 e 24 parcelas.'));

      if (quantidadeDeParcelas < 5) {
        quantidadeDeParcelas = 5;
      }
      else if (quantidadeDeParcelas > 24) {
        quantidadeDeParcelas = 24;
      }

      let total = valorEmprestimo * (1 + 0.08) ** quantidadeDeParcelas;
      
      alert(`Seu empéstimo deverá ser pago em ${quantidadeDeParcelas} vezes de R$${(total/quantidadeDeParcelas).toFixed(2)}. O valor total que deverá ser pago é de R$${total.toFixed(2)}.`)
    }
    else {
      alert(`O valor requisitado de R$${valorEmprestimo} não pode ser emprestado. Por favor, entre em contato com um de nossos gerentes.`);
    }
  }
  else {
    alert(`Sua renda precisa ser igual ou maior que R$1500,00. A renda digitada foi R$${renda}!`);
  }
}
else {
  alert(`Sua idade precisa ser entre 25 e 65 anos! O valor digitado foi ${idade}`);
}