
import PromptSync from "prompt-sync";
const prompt = PromptSync();


let nomes = prompt('Digite os nomes dos funcionário: ')
let nomefunc = nomes.split(',').map(nome => nome.trim())


    let sorteado = Math.floor(Math.random() * nomefunc.length)
    console.log(`O funcionário sorteado foi: ${nomefunc[sorteado]}`)
    