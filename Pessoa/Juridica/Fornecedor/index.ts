import { Produto } from "./Produto.ts";
import { Setor } from "./Setor.ts";

export class Fornecedor{
    setor:Setor;
    produto:Produto;

    constructor(setor:Setor,produto:Produto){
        this.setor=setor;
        this.produto=produto
    }
}