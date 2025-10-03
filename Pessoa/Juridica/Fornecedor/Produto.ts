import {Decimal} from "decimal.js"

export class Produto{
    protected nome: string;
    protected categoria: string;
    protected preco: Decimal;
    constructor(nome:string,categoria:string,preco:Decimal){
        this.nome=nome;
        this.preco=preco;
        this.categoria=categoria
    }
}

