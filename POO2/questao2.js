import PromptSync from 'prompt-sync'
const prompt = PromptSync()

class dadosbancarios {
    #nome
    #numeroconta
    #numeroagencia
    #saldo
    constructor (nome,numeroconta,numeroagencia,saldo){
        this.#nome = nome
        this.#numeroconta = numeroconta
        this.#numeroagencia = numeroagencia
        this.#saldo = 0.0
    }
    get nome(){
        return this.#nome
    }
    set nome(novoNome){
        this.#nome = novoNome
    }
    get numeroconta(){
        return this.#numeroconta
    }
    set numeroconta(novoNumeroConta){
        this.#numeroconta = novoNumeroConta
    }
    get numeroagencia(){
        return this.#numeroagencia
    }   
    set numeroagencia(novoNumeroAgencia){
        this.#numeroagencia = novoNumeroAgencia
    }get saldo(){
        return this.#saldo
    }set saldo (novosaldo){
        this.#saldo  = novosaldo
    }
    metdepositar (){
        
        let valordeposito = Number(prompt('Digite o valor: '))
        this.#saldo += valordeposito
        console.log('Seu novo saldo e: $ ' + this.#saldo)

    }
    metsacar(){
        
        let valorsaq = Number(prompt('Digite o valor para saque: '))
        if (valorsaq>this.#saldo){
            console.log  ('Saldo insuficiente')
        }else {
            this.#saldo -=  valorsaq
            console.log('O valor do saque: $' + valorsaq, 'saldo atualizado: $' + this.#saldo)
        }
    }
}


let cliente = new dadosbancarios()
cliente.nome = prompt ('Digite seu nome: ')
cliente.numeroconta = prompt ('Digite o número da conta: ')
cliente.numeroagencia = prompt ('Digite o número da agência: ')
console.log (`Olá, ${cliente.nome}, seu número de conta é ${cliente.numeroconta} e sua agência é ${cliente.numeroagencia}`)
let operacao
do {
    console.log ('Opção 1 saque!  \nOpção 2 deposito! \nOpção 3 sair!')

     operacao =Number( prompt('Digite a opção que deseja: '))
    
switch (operacao){
case 1:
    cliente.metsacar()
    break;
    case 2:
    cliente.metdepositar()
     break;

     case 3:
    console.log('Saindo...')
    break;
    default:
        console.log ("Opção invalida!")
}

}while(operacao!==3)





