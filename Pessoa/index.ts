import { Endereco } from "./Endereco/index.ts";

export abstract class Pessoa{
    nome:string;
    telefone:string;
    email:string;
    endereco:Endereco;
    constructor(nome:string,telefone:string,email:string, endereco:Endereco){
            this.nome=nome;
            this.telefone=telefone;
            this.email=email;
            this.endereco=endereco
    }

}