/*Algoritmo que preencha um vetor de 30 posições com números entre 1 e 15 sorteados pelo computador. 
Depois disso, peça para o usuário digitar um número (chave) e seu programa deve mostrar em 
que posições essa chave foi encontrada. Mostre também quantas vezes a chave foi sorteada.*/

let numerosAleatorios = [];
let posicoes = ""; // eu posso ir adicionando os índeces dos numeros aleatorios numa string
let totalOcorrencias = 0; 

// Preenche a lista/Vetor com 30 números aleatórios entre 1 e 15
for (let contador = 0; contador < 30; contador++) {
    numerosAleatorios[contador] = Math.floor(Math.random() * 15) + 1;
}

let numeroChave;
do {
    numeroChave = parseInt(prompt("Digite um número entre 1 e 15 para buscar:"));
    if (isNaN(numeroChave)) {
        alert("Você não digitou um número, por favor tente novamente!😅");
        continue;
    }
} while (isNaN(numeroChave) || numeroChave < 1 || numeroChave > 15);// quando usa o do while temos que confirmar dentro dele também a condição isNaN

// Vai Buscar o numero Chave digitado na lista numerosAleatorios
for (let index = 0; index < 30; index++) {
    if (numerosAleatorios[index] === numeroChave) {
        if (posicoes !== "") { // Se já tiver alguma posição, ele adiciona vírgula com um espaço e a mais o novo valor
            posicoes += ", ";
        }
        posicoes += index; // Adiciona a posição à string da variavel 'posicoes'
        totalOcorrencias++; // Incrementa o contador do total das ocorrencias
    }
}

console.log("Lista gerada:", numerosAleatorios);
if (totalOcorrencias > 0) {
    console.log(`O número ${numeroChave} foi encontrado nas posições: ${posicoes}`);
    console.log(`Total de ocorrências: ${totalOcorrencias}`);
    alert("Os número foi verificado na lista! Confira a lista no console!😉");
} else {
    console.log(`O número ${numeroChave} não foi encontrado na lista.`);
    alert("Que Pena! Seu número não foi encontrado na lista!😭");
}
