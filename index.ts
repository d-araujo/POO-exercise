import {Decimal} from "decimal.js"
import { EstadoCivil } from "./Pessoa/Fisica/EstadoCivil.ts"
import { Setor } from "./Pessoa/Fisica/Funcionario/Setor.ts"
import { Engenheiro } from "./Pessoa/Fisica/Funcionario/Types/Engenheiro/index.ts"
import { Genero } from "./Pessoa/Fisica/Genero.ts"
import { Pessoa } from "./Pessoa/index.ts"
import { Endereco } from "./Pessoa/Endereco/index.ts"
import { UnidadeFederativa } from "./Pessoa/Endereco/UnidadeFederativa.ts"
import { Diretor } from "./Pessoa/Fisica/Funcionario/Types/Diretor/index.ts"
import { Funcionario } from "./Pessoa/Fisica/Funcionario/index.ts"

const diretor = new Diretor('Fontana','71999833421','fontana@gail.com',new Endereco('aaaaaaa','123','perto de casa','4010030','salvador',UnidadeFederativa.BAHIA),Genero.FEMININO,EstadoCivil.CASADO,new Date(2006,0,12),'4325','2313','42342',Setor.OPERACOES,new Decimal(23), new Decimal(2))
diretor.admitir(new Engenheiro('Fontana','71999833421','fontana@gail.com',new Endereco('aaaaaaa','123','perto de casa','4010030','salvador',UnidadeFederativa.BAHIA),Genero.FEMININO,EstadoCivil.CASADO,new Date(2006,0,12),'4325','2313','42342',Setor.OPERACOES,new Decimal(23),'fontanao'))
console.log(diretor)
