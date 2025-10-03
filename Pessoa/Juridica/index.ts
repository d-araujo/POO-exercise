import { Pessoa } from "../index.ts";
import { Endereco } from "../Endereco/index.ts";

export abstract class Juridica extends Pessoa{
    protected cnpj:string;
    protected incricaoEstadual:string

    constructor(nome:string,telefone:string,email:string, endereco:Endereco, cnpj:string, inscricaoEstadual:string){
            super(nome,telefone,email,endereco)
            this.cnpj=cnpj;
            this.incricaoEstadual=inscricaoEstadual;
        }
}