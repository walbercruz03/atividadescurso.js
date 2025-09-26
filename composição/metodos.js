import PromptSync from "prompt-sync";
const prompt = PromptSync()


export class Memoria {
    #tipo
    #frequencia
    #capacidade
    constructor(tipo,frequencia,capacidade){
        this.#tipo = tipo
        this.#frequencia = frequencia
        this.#capacidade = capacidade
    } get capacidade(){
        return this.#capacidade
    }set capacidade(novamem){
        this.#capacidade = novamem
    }

    metusarmemoria(){
        let qtd = Number( prompt ('Informe a quantidade que deseja usar: '))

        if (qtd<this.#capacidade){
            this.#capacidade -= qtd

            console.log (`Você usou ${qtd} resta ${this.#capacidade}`)
        }else {
            console.log ('Memoria insuficiente!')
        }
    }

} 

let novam = new Memoria ('ram','1.5', 1024)
novam.metusarmemoria()