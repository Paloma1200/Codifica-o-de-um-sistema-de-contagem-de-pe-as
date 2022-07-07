let pesoPeça = 0;
let nomePeça = "";
let quantidadePeçasNaCaixa = 0;

console.log("Validar o peso da Peça");

do{
    pesoPeça = prompt("Qual peso da peça");
}   while (pesoPeça <= 100)

console.log("Peso validado com sucesso");

console.log("Validar o nome da peça");

do{
    nomePeça = prompt("Qual o nome da peça");
}while (nomePeça.length <=3)

console.log("Validar a caixa")

do{
    quantidadePeçaNaCaixa = prompt("Qual a quantidade de peças na caixa");
} while (quantidadePeçaNaCaixa >=10)
