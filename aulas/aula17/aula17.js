function titulo(title){
    title = console.log(`\n------------${title}------------\n`)
}
function explicacao(exp){
    exp = console.log(`|${exp}|\n`)
}
function destaque(des){
    des = console.log(`\n${des}\n`)
}
function obs(obs){
    obs = console.log(`\n |${obs}|\n`)
}

titulo("Loop While")
explicacao("Enquanto uma condição for verdadeira o loop continuará rodando")

let n=0

while(n<10){
    console.log(n)
    n++
}

titulo("Usando para calcular o fatorial")

let num = 5;
let fat = 1

while(num>=1){
    fat*=num
    num--
    console.log(fat)
}                       
console.log(fat)