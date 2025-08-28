import promptsync from 'prompt-sync'
const prompt = promptsync()
let a = 0
let b = 1
let c=1
let qtd = Number (prompt('Qual a quantidade deseja: '))

while (qtd>=c){
    console.log(a)
    let proximo = a+b
    a=b
    b=proximo
    c++

}
