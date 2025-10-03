import { UnidadeFederativa } from "./UnidadeFederativa.ts";

export class Endereco{
    protected logradouro:string;
    protected numero:string;
    protected complemento:string;
    protected cep:string;
    protected cidade:string;
    protected uf:UnidadeFederativa

    constructor(logradouro:string,numero:string,complemento:string,cep:string,cidade:string,uf:UnidadeFederativa){
        this.logradouro=logradouro
        this.numero=numero
        this.complemento=complemento
        this.cep=cep
        this.cidade=cidade
        this.uf=uf
    }
 

}