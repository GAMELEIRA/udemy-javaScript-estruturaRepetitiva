/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:25/02/2020 
 * HORA:14:01
 * FINALIDADE DO PROGRAMA: TRABALHAR COM AS PALAVRAS CHAVE BREAK E CONTINUE
 */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let a in nums) {

    if (a == 5) {

        break;

    }

    console.log(`${a} = ${nums[a]}`);

}

for (let y in nums) {

    if (y == 5) {

        continue;

    }

    console.log(`${y} = ${nums[y]}`);

}

externo: for (let a in nums) {

    for (b in nums) {

        if (a == 2 && b == 3) {

            break externo;

        }

        console.log(`${a}, ${b}`);

    }


}