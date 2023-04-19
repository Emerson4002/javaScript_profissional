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

titulo("Loop Do While")
explicacao("Pelo menos uma vez o o bloco de comando vai ser executado")

do {
    console.log("CFB Cusos")
    n++

}while(
    n<10
)
console.log("Fim do programa")

