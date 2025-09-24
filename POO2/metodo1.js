import PromptSync from "prompt-sync";
const prompt = PromptSync()



export class pessoa {
   #nome
   #endereco
   #renda
    constructor (nome,endereco,renda) {
     this.#nome = nome
     this.#endereco = endereco
     this.#renda = renda
     
    }
    set nome (nom){
        this.#nome = nom
    }
    get nome(){
        return this.#nome
    }
      set endereco (end){
     this.#endereco = end
    }
    get endereco (){
        return this.#endereco
    }
    set renda (rend){
        this.#renda = rend
    }
    get renda (){
       return this.#renda
    }
    metmostrardados(){
        console.log (`Seu nome: ${this.#nome} \nSeu endereço é: ${this.#endereco}
        \nSua renda:$ ${this.#renda}`)
    }
}

