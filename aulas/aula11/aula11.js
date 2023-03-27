function titulo(title){
    title = console.log(`\n------------${title}------------\n`)
}
function explicacao(exp){
    exp = console.log(`|${exp}|\n`)
}
function destaque(des){
    des = console.log(`\n${des}:`)
}
  
titulo("Operador Typeof")
explicacao("O operador typeOf retorna o tipo da variavel")

let v1 = 10;
let v2 = "10";
let v3 = v1===v2;
let v4 = {Nome: "Jacinto"};

console.log(`Valor: ${v1} - Tipo: ${v1}`)
console.log(`Valor: ${v2} - Tipo: ${v2}`)
console.log(`Valor: ${v3} - Tipo: ${v3}`)
console.log(`Valor: ${v4} - Tipo: ${v4}`)

