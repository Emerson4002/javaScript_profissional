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

titulo("Loop FOR")
obs("Repetição é igual a interação")
explicacao("Estrutura de um for(inicialização; condição; controle/incremento ou declemento)")

for(let i = 0; i < 100; i++){
    if(i%2==0){
        console.log(i + " é par")
    }else{
        console.log(i + " é impar")
    }
    
}
console.log("Fim do programa")
