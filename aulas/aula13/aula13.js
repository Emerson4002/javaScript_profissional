function titulo(title){
    title = console.log(`\n------------${title}------------\n`)
}
function explicacao(exp){
    exp = console.log(`|${exp}|\n`)
}
function destaque(des){
    des = console.log(`\n${des}:`)
}
function obs(obs){
    obs = console.log(`\n |${obs}|\n`)
}
titulo("IF & IF ELSE")
explicacao("A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.")

obs("quando o if tem somente um comando no seu interior não é necessario o uso de chave")


let num = 10;
//quando o if tem somente um comando no seu interior não é necessario o uso de chave
if(num > 10){

    console.log("Numeral maior que 10")

}//usado para criar outra condição
else if(num > 5){
    console.log("Numeral esta entre 6 e 10")
}
//caso contrario do if ele executa essebloco
else{
    console.log("Numeral menor ou igual que 5")
}

titulo("Aninhamento de IFs")
obs("Basicamente alinhar um if dentro do if")
let num2 = 40;
if(num2 > 10){
    console.log("Numeral maior que 10")
    if(num2 > 50){
        console.log("Numeral maior que 50")
    }
}else if(num2 > 5){
    console.log("Numeral esta entre 6 e 10")
}else{
    console.log("Numeral menor ou igual a 5")
}


let energia = 100;
let clima = "sol"

if(energia > 70 && clima == "sol"){
    console.log("Vou a praia");
}else{
    console.log("Vou ao cinema ")
}
