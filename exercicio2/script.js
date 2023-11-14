let soma = function(numero1, numero2){
    console.log('Soma dos números é:', numero1 + numero2)

}
soma(4,20)
console.log('----------------------')

let maiorIgual = function(numero1, numero2){
    console.log('O número', numero1, 'é maior ou igual ao número', numero2,'?', numero1 >= numero2)

}
maiorIgual(120,78)
console.log('----------------------')

let par = function(numero){
    console.log('O número', numero, 'é par ou não?', numero % 2 === 0)

}
par(26)
console.log('----------------------')

const salarioLiquido = function(salarioBruto){
    const calculoInss = salarioBruto - (salarioBruto * 0.10)
    console.log('Salário líquido de:', calculoInss)
    return calculoInss
}
salarioLiquido(3000)    