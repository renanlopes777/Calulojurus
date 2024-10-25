import entradaDados from 'readline-sync';

console.log("Aplicação de Juros: ");

let valor_juros = 10;

let valor_divida = entradaDados.question("\nInforme o valor devido: R$ ");

let dias_vencimento = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ");

valor_divida = Number(valor_divida);
dias_vencimento = Number(dias_vencimento);

let total_juros = (valor_divida / 100) * valor_juros;
let valor_total = valor_divida + total_juros;

console.log("\nValor original da dívida: R$ "+valor_divida);
console.log("Dias atrasados: "+dias_vencimento);
console.log("Taxa de Juros: "+valor_juros+"%");
console.log("Valor total com juros: R$ "+valor_total);

let valorDivida = 100;
let juros = 10;

let valorJuros = (valorDivida / 100) * juros;
let totalDivida = valorDivida + valorJuros;

console.log(totalDivida);