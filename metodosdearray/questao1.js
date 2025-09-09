import PromptSync from 'prompt-sync'
const prompt = PromptSync()

let texto = prompt ('Digite o artigo para publicação: ')
let palavras = texto.split (' ')
let i
let contador = 0
let naoOfensivo = []

for (i=0; i<palavras.length; i++){


if (palavras [i]  ==='kray' || palavras [i] === 'galado' || palavras [i] === 'fldp' || palavras [i] === 'nojento' ){
    palavras [i] = '***'
    contador++
    
}else {
    naoOfensivo.push(palavras [i] )
}

}console.log ('['+palavras.join (' - ')+']')

console.log (`O texto possui ${contador}º palavras ofensivas`)
console.log ('Texto reconstruido: [',naoOfensivo.join(' - '),']')