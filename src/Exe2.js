/**
 * Recebe uma string com o nome completo de uma pessoa (primeiro e último nome apenas) 
 * e devolve o nome com o sobrenome abreviado. Caso só o primeiro nome seja passado, não faça nada.
 * Exemplos:
 *  - Yuri Dirickson -> Yuri D.
 *  - João Silva -> João S.
 *  - Maria -> Maria
 * 
 * @param {String} nomeCompleto nome completo da pessoa.
 * @return string com o segundo nome abreviado
 */
function abreviadorNomes(nomeCompleto) {
    let [firstName, lastName] = nomeCompleto.split(' ');

    let shortName = `${firstName}${lastName !== undefined ? ` ${lastName.charAt()}.` : ''}`;

    return shortName;
}

/**
 * Escreva uma função que recebe uma String com a data no formato brasileiro (dia/mês/ano) e
 * converta para o formato: 'Dia de Mês Extenso de Ano'. 
 * Exemplos:
 *  - 10/11/2019 -> 10 de Novembro de 2019
 *  - 03/02/2000 -> 03 de Fevereiro de 2000
 * OBS: Note a letra maiúscula do mês.
 * 
 * @param {String} data 
 * @returns {String} data no formato 
 */
function converteDataParaFormaCompleta(data){
    let [dia, mes, ano] = data.split('/');

    switch (mes) {
        case "01":
            mes = "Janeiro";
            break;
        case "02":
            mes = "Fevereiro";
            break;
        case "03":
            mes = "Março";
            break;
        case "04":
            mes = "Abril";
            break;
        case "05":
            mes = "Maio";
            break;
        case "06":
            mes = "Junho";
            break;
        case "07":
            mes = "Julho";
            break;
        case "08":
            mes = "Agosto";
            break;
        case "09":
            mes = "Setembro";
            break;
        case "10":
            mes = "Outubro";
            break;
        case "11":
            mes = "Novembro";
            break;
        case "12":
            mes = "Dezembro";
            break;
        default:
            return null;
    }

    return `${dia} de ${mes} de ${ano}`
}