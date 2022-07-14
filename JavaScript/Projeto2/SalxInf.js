import read from 'readline-sync'

console.log("\n      Salário x Inflação\n\n")

console.log("Escolha uma opção: ")
console.log("\n1 - Listar salários mínimos de 2010 à 2020 ")
console.log("2 - Listar o índice IPCA de 2010 à 2020 ") 
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA")

var opcao = read.question("\nDigite a opção escolhida: ")
console.log("\n")
var array_salario = [
    {ano: 2010, sal: 510},
    {ano: 2011, sal: 545},
    {ano: 2012, sal: 622},
    {ano: 2013, sal: 678},
    {ano: 2014, sal: 724},
    {ano: 2015, sal: 788},
    {ano: 2016, sal: 880},
    {ano: 2017, sal: 937},
    {ano: 2018, sal: 954},
    {ano: 2019, sal: 998},
    {ano: 2020, sal: 1045},
]
var array_ipca = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52},
]

switch (opcao) {
    case "1":
        for (let x of array_salario){
        console.log("Ano: ".padEnd(30,'.')+x.ano)
        console.log("Salário mín.: ".padEnd(30,'.')+"R$ "+x.sal+",00\n")      
    }   
        break
    case "2":
        for (let y of array_ipca){
            console.log("Ano: ".padEnd(30,'.')+y.ano)
            console.log("Inflação IPCA: ".padEnd(30,'.')+y.ipca+"%\n")
    }   
        break
    case "3":
        for (let i = 0; i < array_salario.length; i++){
        let ano = array_salario[i].ano
        let sal = array_salario[i].sal
        let ip = array_ipca[i].ipca
        let cl = 0.0
       
        console.log("Ano: ".padEnd(30,'.')+ano)
        console.log("Salário mín.: ".padEnd(30,'.')+"R$ "+sal+",00")
        if(i==0){  
            console.log("Crescimento Salarial:".padEnd(30,'.')+"--")
        }else{
            cl = ((array_salario[i].sal-array_salario[i-1].sal)/array_salario[i-1].sal)*100
            console.log("Crescimento Salarial:".padEnd(30,'.')+cl.toFixed(2)+"%")
        }   
        console.log("Inflação IPCA: ".padEnd(30,'.')+ip+"%\n")
    }   
        break
    default:
        console.log("Opção invalida!")
} 