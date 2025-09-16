import PromptSync from 'prompt-sync'
const prompt = PromptSync()

let nome1 = prompt ('digite o nome do primeiro jogador: ')
let nome2 = prompt ('Digite o nome do segundo jogador: ')
let i 
let teste1 = []
let teste2 = []
for (i=0; i<3 ; i++){
   let  teste = Number (prompt (`${nome1} - digite o ${i+1}º numero: `))
   teste1.push(teste)
   let test2 = Number (prompt (`${nome2} - digite o ${i+1}º numero: `))
   teste2.push(test2)
}
let result1 = teste1.reduce((valor,soma) => soma + valor)

let result2 = teste2.reduce ((valor,soma) => soma + valor)

if (result1>result2){
   console.log (`${nome1} Parabéns você ganhou, Resultado: ${result1}`)
   
}else {
   console.log (`${nome2} Parabéns você ganhou, Resultado: ${result2}`)
}

