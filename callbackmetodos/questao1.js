import PromptSync from "prompt-sync";

const prompt = PromptSync()

let hortifrut = [
    {produto: 'uva', preco: 2},
    {produto: 'banana', preco: 3},
    {produto: 'melancia', preco: 6}
]

console.log (hortifrut)

let frutascomacresc = hortifrut.map(item => {
    return{
    produto: item.produto,
    preco:item.preco*1.05
    }

})

console.log ('Acrescimo 5%: ',frutascomacresc)
let total = frutascomacresc.reduce((soma,item) => soma + item.preco,0) 
console.log ('R$'+total.toFixed(2))

if (frutascomacresc.some(item => item.preco < 5)){
    console.log('ha frutas abaixo de 5')
}
  if(frutascomacresc.every(item => item.preco > 0)){
    console.log ('Todos produtos acima de 0')
  }