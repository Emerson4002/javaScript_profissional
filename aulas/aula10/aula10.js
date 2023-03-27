function titulo(title){
    title = console.log(`\n------------${title}------------\n`)
}
function explicacao(exp){
    exp = console.log(`|${exp}|\n`)
}
function destaque(des){
    des = console.log(`\n${des}:`)
}
  
titulo("Operador Ternario")
explicacao("è uma forma de reduzir/simplificar uma operação")

let num = 10;

console.log("Forma tradicional de fazer")
console.log("let res=num%2\nif(res==0){console.log(Par)}\nelse{  console.log(Impar)}")

destaque("Usando operador ternario")
console.log("res=(!(num%2) ? Par : Impar)");
res=(!(num%2) ? "Par" : "Impar")
console.log(res);




