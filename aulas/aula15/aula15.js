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

titulo("Switch Case")

destaque("Se o teste logico é igual a algum caso(case) do switch ele sera executado e caso não seja igual o valor do default será executado") 


let colocacao = 5;

switch(colocacao){
    case 1: 
        console.log("Primeiro lugar")
        break;
    case 2: 
        console.log("Segundo Lugar")
        break;
    case 3:
        console.log("Terceiro lugar")
        break;
    case 4: case 5: case 6:
        console.log("Premio de consolação")
        break;
    default:
        console.log("Não subiu ao podio")
        break;
}