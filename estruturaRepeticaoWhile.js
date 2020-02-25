/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:25/02/2020 
 * HORA:12:05
 * FINALIDADE DO PROGRAMA: TRABALHAR COM A ESTRUTURA DE REPETICAO WHILE
 */

function getInteiroAletorioEntre(min, max){

    const valor = Math.random() * (max - min) + min;

    return Math.floor(valor);

}

let opcao = 0;

while(opcao != -1){

    opcao = getInteiroAletorioEntre(-1, 10);

    console.log(opcao);

}

console.log(`Terminou!`);