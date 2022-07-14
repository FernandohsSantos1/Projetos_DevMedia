<<<<<<< HEAD
import input from 'readline-sync'

console.log('\n        Calculadora de Juros\n')

var valor = +input.question('Informe o valor devido: ')
var dias = input.question('Informe quantos dias se passaram desde o vencimento: ')
var juros = 0;
if (dias <= 15){
    juros = 0.05
}else{
    juros = 0.1
}


console.log(`\nValor original da dívida: R$ ${valor}`)
console.log(`Dias atrasados: ${dias}`)
console.log(`Taxa de juros: ${juros*100}%`)
console.log(`Valor original da dívida: RS$ ${valor*juros+valor}`)
=======
import input from 'readline-sync'

console.log('\n        Calculadora de Juros\n')

var valor = +input.question('Informe o valor devido: ')
var dias = input.question('Informe quantos dias se passaram desde o vencimento: ')
var juros = 0;
if (dias <= 15){
    juros = 0.05
}else{
    juros = 0.1
}


console.log(`\nValor original da dívida: R$ ${valor}`)
console.log(`Dias atrasados: ${dias}`)
console.log(`Taxa de juros: ${juros*100}%`)
>>>>>>> d3c596a2cc54f6790de8a724888e00ecf2d06c3d
console.log(`Valor original da dívida: RS$ ${valor*juros+valor}`)