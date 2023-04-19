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

titulo("BREAK & CONTINUE")
explicacao("")

let n=1
let max=1000
while(n<max){
    console.log(`Valor - ${n}`)
    if(n%2==0){
        console.log(`${n} é par`)
        break;
    }
    n++
}
console.log("Fim do programa")

