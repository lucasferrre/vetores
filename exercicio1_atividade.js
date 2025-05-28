/*programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, 
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.*/


let pessoas = [];
 

let nome;
for (let index = 0; index < 7; index++) {
    nome = prompt(`Digite o nome da ${index+1}º pessoa!`);

    if(isNaN(nome)){
        pessoas[index] = nome;
     
    }else{
        alert("O valor digitado é um número, tente novamente com um nome!😗😥")
        index--;
    }

}
// mostrando a lista dos nomes informados mas com a ordem inversa
for(let contador = 6; contador >= 0; contador--){
    console.log(pessoas[contador]);
}
alert("Os nomes foram armazenados com sucesso! Veja a lista inversa no console!😁");
