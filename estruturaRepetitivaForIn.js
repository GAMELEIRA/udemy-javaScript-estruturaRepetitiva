/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:25/02/2020 
 * HORA:13:21
 * FINALIDADE DO PROGRAMA: TRABALHAR COM A ESTRUTURA DE REPETICAO FOR IN
 */

const notas = [8.7, 7.4, 9.8, 8.1, 7.7];


for (let i in notas) {

    console.log(i, notas[i]);

}

const pessoa = {

    nome:"Gabriel Gameleira dos Santos",
    idade:20,
    peso:90


}

for(let atributo in pessoa){

    console.log(`${atributo} ${pessoa[atributo]}`);

}
