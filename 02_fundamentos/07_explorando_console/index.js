//imprimindo mais de uma variável
const x = 10
const y = "emotional damage"
const z = [1,2]

console.log(x,y,z)

//contando impressões => interpolação + loop

console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

// variável entre string => interpolação de texto

const w = 'Fábio'
console.log('o nome é %s e ele quer ser programador', w);

//limpando console

setTimeout(() => {
  console.clear()  
}, 2000)