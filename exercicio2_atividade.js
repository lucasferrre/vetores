/*programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre
 quais são os números pares que foram digitados e em que posições eles estão armazenados.*/

let numerosInteiros = [];
 

let numero;
for (let contagem = 0; contagem < 10; contagem++) {
    numero = parseInt(prompt(`Digite o ${contagem+1}º número inteiro!`));

    if(isNaN(numero)){
        alert("O valor digitado não é um número, tente novamente!😅")
        contagem--;
     
    }else{
        numerosInteiros[contagem] = numero;
    }

}   

// Verificando se esses números são pares
let numParesEncontrados = false;

console.log("Números pares que foram encontrados:");

for (let index = 0; index < 10; index++) {
    if (numerosInteiros[index] % 2 === 0) {
        console.log(`Número ${numerosInteiros[index]} na posição ${index}`);
        numParesEncontrados = true;
    }
}

if (!numParesEncontrados) {
    console.log("Nenhum número par foi encontrado na lista.");
}

alert("Os números foram armazenados com sucesso! Veja a lista no console!😉");

