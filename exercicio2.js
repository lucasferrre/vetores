/* programa que pergunte ao usuário 4 notas de uma disciplina escolar, armazene-as em um 
vetor, ao final exibas as notas armazenadas e informe ao usuário sua média.*/

let notas = [];

let soma=0;
let nota;
let media=0;
for (let index = 0; index < 4; index++) {
    nota = parseFloat(prompt(`Digite a sua ${index+1}º nota!`))

    if(!isNaN(nota)){
        notas[index] = nota;
        soma += nota;
     
    }else{
        alert("O valor digitado não é um número, tente novamente!😗😥")
        index--;
    }

}
for (let index = 0; index < 4; index++) {
console.log(notas[index]);
}

media = soma / 4;
console.log(`A média sera de: ${media}`)