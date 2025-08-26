import PromptSync from 'prompt-sync'
const prompt = PromptSync()
let valorreal = Number (prompt('Qual o valor em real deseja trocar: '))
console.log ('Dólar, Euro, Peso, Libra, Franco!')
let moeda = prompt ('Qual moeda deseja converter: ').toLowerCase()


   let dolar = 5.424
   let euro = 6.353
   let peso = 0.0042
   let libra = 7.326
   let franco = 6.753

   switch (moeda) {
    case 'dolar':
        console.log ('O valor é: $'+ (valorreal/dolar).toFixed(2))
    break;
    case 'euro':
        console.log ('O valor é: $'+ (valorreal/euro).toFixed(2))
    break;
    
    case 'peso':
        console.log ('O valor é: $'+ (valorreal/peso).toFixed(2))
    break;

    case 'libra':
        console.log ('O valor é: $'+ (valorreal/libra).toFixed(2))
    break;

    case 'franco':
        console.log ('O valor é: $'+ (valorreal/franco).toFixed(2))
   }

