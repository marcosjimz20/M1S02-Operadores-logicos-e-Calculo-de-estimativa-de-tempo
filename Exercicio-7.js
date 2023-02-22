/* Crie um programa com JavaScript que a partir de um salário inicial, 
calcule quantos meses será necessário para atingir uma meta salarial 
recebendo um aumento a cada 6 meses equivalente a 10% no salário corrente.

Para executar esse exercício você provavelmente vai precisar saber usar: 
estrutura de repetição, estrutura condicional, operador Remainder (%), 
operadores aritméticos (divisão, multiplicação e soma);

Um adicional será formatar o valor numérico para real. */

function main() {
    const salarioAtual = Number(prompt('Salario atual:'));

    const percentual = calcularPercentualAumento(salarioAtual);

    const aumento = salarioAtual * (percentual / 100);
    const novoSalario = salarioAtual + aumento;

    console.log('Salario Original R$', salarioAtual.toFixed(2));
    console.log('Percentual aumento (%)', percentual);
    console.log('Aumento R$', aumento.toFixed(2));
    console.log('Novo Salário', novoSalario.toFixed(2));
}

function calcularPercentualAumento(valor) {

    let data = new Date();
    let mesAumento = data.getMonth();
    console.log(mesAumento);

    for (let salario = valor; salario <= 3000; salario++) {
        if (mesAumento == 5 || mesAumento == 11) {
            return 10;
        } else {
            return 0;
        }
    }

}