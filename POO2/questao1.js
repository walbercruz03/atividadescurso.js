import PromptSync from "prompt-sync";
const prompt = PromptSync()
import { pessoa } from "./metodo1.js";

const cliente1 = new pessoa ()
cliente1.nome = prompt ('Digite seu nome: ') 
cliente1.endereco = prompt ('Digite seu endeço: ')
cliente1.renda = prompt ('Digite sua renda: ')

cliente1.metmostrardados()