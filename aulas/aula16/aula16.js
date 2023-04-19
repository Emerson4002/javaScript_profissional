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
titulo("FOR IN & FOR OF")
let num = [10,20,30,40,50]

obs("FOR padrão")
for(let i = 0; i<num.length;++i){
    console.log(num[i])
} 

titulo("FOR IN")
obs("inicia criando uma variavel que recebe os elementos retornados da coleçao que quer trabalhar")
obs("Se quiser pegar a posição dos elementos usa o FOR IN")
for(n in num){
    //obviamente da pegar os elementos usando
    //console.log(num[n])
    console.log(n)
}

titulo("FOR OF")
obs("Intera diretamente os elementos dentro da coleção")
obs("se quiser pegar os elementos da coleção então vai ser usado o FOR OF")
for(n of num){
   
    console.log(n)
}

const objs = document.getElementsByTagName("div")

for(o of objs){
    console.log(o.innerHTML="Cursos")
}
for(o in objs){
    console.log(o)

}