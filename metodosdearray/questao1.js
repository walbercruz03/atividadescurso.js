import PromptSync from 'prompt-sync'
const prompt = PromptSync()

let texto = prompt ('Digite o artigo para publicação: ')
let palavras = texto.split (' ')
let i
for (i=0; i<palavras.length; i++){

if (palavras [i]  ==='kray' || palavras [i] === 'cu'){
    palavras [i] = '***'
}
}console.log (palavras)