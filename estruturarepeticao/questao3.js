import promptsync from 'prompt-sync'
const prompt = promptsync()

let numero = Number (prompt ('Digite um número: '))
let c = 0, i

    
for (i=0;i<=numero;i++){
    if (numero%i===0){
        console.log ('O', numero+'º e divisivel por',i+'º')
        c++
    }
    }
if (c===2){
    console.log (`O ${numero}º é primo!`)
}else {
    console.log (`O ${numero}º número não é primo!`)
}

