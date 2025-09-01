import PromptSync  from "prompt-sync"
const prompt = PromptSync()


let i, quantidadeconsoantes = 0, c = 0
let consoantes = ''
let array = []
for (i=0;i<15;i++){
    array[i] = prompt (c+1+'º Caractere: ')
    c++
    if (array[i] !== 'a' && array [i] !== 'e'&& array [i] !== 'i' && array [i] !== 'o' && array [i] !== 'u' ){
        quantidadeconsoantes++
        consoantes += array[i] + ' '
    }
}console.log('Número de consontes:', quantidadeconsoantes)
console.log('Consoantes:', consoantes)