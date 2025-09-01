import PromptSync from 'prompt-sync'
const prompt = PromptSync()

let quantidade = []
let par = []
let impar = []
let i
let numero 
let c=0
for (i=0;i<20;i++){
   numero = Number (prompt (c+1+'º Digite o número: '))
   quantidade[i]= numero
    c++
if (numero %2===0){

    par.push(quantidade[i])
}
else{
impar.push (numero)
}
}console.log('Pares: '+par)
console.log ('Impares: '+impar)