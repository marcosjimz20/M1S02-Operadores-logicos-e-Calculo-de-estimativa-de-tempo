/* Resolva o problema abaixo com JavaScript.

Um evento de tecnologia está acontecendo na cidade e você fará o sistema para gerir a 
venda de ingressos. A regra é a seguinte: mulheres pagam R$ 50 reais na entrada, 
enquanto homens pagam R$ 80 reais, para pessoas com mais de 60 anos ou 
estudantes do LAB365 a entrada é gratuita mas se a pessoa for menor de idade 
e não for estudante de programação não deve entrar;

Nesse exercício você fará uso de operadores lógicos, condicionais if/else; */

function entradas(idade, pessoa) {
    if (pessoa == "mulher" && idade >= 18 && idade < 60) {
        return "Paga 50$";
    }
    else if (pessoa == "homem" && idade >= 18 && idade < 60) {
        return "Paga 80$";
    }
    else if (idade >= 60 || pessoa == "estudante" ) {
        return "Entrada GRATUITA";
    } 
    else if (idade <= 17) {
        return "Nao deve entrar";
    } 
}

/* Chamadas para a function entradas */

entradas(34, "mulher");
entradas(20, "homem");
entradas(60, "mulher");
entradas(59, "homem");
entradas(22, "estudante");
entradas(15, "estudante");
entradas(17, "homem");