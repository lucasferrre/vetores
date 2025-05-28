/*Programa que pede ao usuário para digitar 10 números e armazene em um vetor. Depois, 
crie um novo vetor removendo os valores duplicados. Exiba o vetor original e o vetor sem duplicatas.*/

let vetorOriginal = [];
for (let index = 0; index < 10; index++) {
    let numero = parseInt(prompt(`Digite o ${index + 1}º número:`));
    vetorOriginal[index] = numero; // Armazena diretamente no índice
}

let vetorSemDuplicatas = [];
let tamanhoSemDuplicatas = 0;

for (let contador = 0; contador < 10; contador++) {
    let duplicatas = false;
    // Verifica se o número contagem já existe no vetorSemDuplicatas
    for (let j = 0;j < tamanhoSemDuplicatas; j++) {
        if (vetorOriginal[contador] === vetorSemDuplicatas[j]) {
            duplicatas = true;
            break; 
        }
    }
    
    // Aqui nesse if Se não for duplicata, adiciona ao novo vetor
    if (!duplicatas) {
        vetorSemDuplicatas[tamanhoSemDuplicatas] = vetorOriginal[contador];
        tamanhoSemDuplicatas++;
    }
}

console.log(`Vetor original ${vetorOriginal}`);
console.log(`Vetor sem duplicatas: ${vetorSemDuplicatas}`);
