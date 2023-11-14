let soma = function(primeiroNumero, segundoNumero){
    console.log(`A soma do número ${primeiroNumero} com o número ${segundoNumero} é:`, primeiroNumero + segundoNumero)
    return soma
}
console.log('--------------')

let subtração = function(primeiroNumero,segundoNumero){
    console.log(`A subtração do número ${primeiroNumero} com o número ${segundoNumero} é de:`, primeiroNumero - segundoNumero)
    return subtração
}
console.log('--------------')

let multiplicacao = function(primeiroNumero,segundoNumero){
    console.log(`A multiplicação do número ${primeiroNumero} pelo número ${segundoNumero} é de:`, primeiroNumero * segundoNumero)
    return multiplicacao
}
console.log('--------------')

let divisao = function(primeiroNumero,segundoNumero){
    console.log(`A divisão do número ${primeiroNumero} pelo número ${segundoNumero} é de:`, primeiroNumero / segundoNumero)
    return multiplicacao
}


let primeiroNumero = Number (prompt('Digite um número'))
let segundoNumero = Number (prompt('Digite outro número'))

soma(primeiroNumero,segundoNumero)

subtração(primeiroNumero,segundoNumero)

multiplicacao(primeiroNumero,segundoNumero)

divisao(primeiroNumero,segundoNumero)