function titulo(title){
    title = console.log(`\n------------${title}------------\n`)
}
function explicacao(exp){
    exp = console.log(`|${exp}|\n`)
}
function destaque(des){
    des = console.log(`\n${des}:`)
}
  

let n1 = [10,20,30];
let n2 = [11,22,33,44,55];
let n3 = [...n1]

//console.log(`n1: ${n1}`)
//console.log(`n2: ${n2}`)
console.log(`n3: ${n3}`)
console.log(`Tipo de n3: ${typeof(n3)}`)


const soma = (v1,v2,v3)=>{
    return v1+v2+v3
}

let valores=[1,4,5]


console.log(soma(...valores))

//html collection
const objs1 = document.getElementsByTagName("div");
//operador spread
//vai se tornar um array
//assim criando um leque maior de interações

const objs2 =[...document.getElementsByTagName("div")];
objs2.forEach(Element => {
    console.log(Element)
})

console.log(objs1)
console.log(objs2)




