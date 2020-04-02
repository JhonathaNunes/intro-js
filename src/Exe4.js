/**
 * Recebe um vetor de números e retorna o menor elemento do vetor. 
 * Se o vetor estiver vazio, retorna undefined.
 * @param {Array} vetor 
 * @return {Number} o menor valor.
 */
function acharMenor(vetor) {
    if (vetor.length == 0) {
        return undefined;
    }

    let smallestNum = vetor[0];

    vetor.forEach((num) => {
        if (num < smallestNum) {
            smallestNum = num;
        }
    });

    return smallestNum;
}

/**
 * Recebe um vetor de números e devolve um outro vetor apenas com os números pares deste vetor.
 * Se o vetor estiver vazio, devolve um vetor vazio.
 * @param {Array} vetor com números inteiros.
 * @returns {Array} vetor contendo apenas números pares do original (ou vazio se não houver nenhum)
 */
function acharPares(vetor) {
    // if (vetor.length == 0) {
    //     return [];
    // }

    // let numbers = vetor.filter((num) => {
    //     if (num % 2 == 0) {
    //         return num;
    //     }
    // });

    // console.log(numbers);

    // return numbers;
}