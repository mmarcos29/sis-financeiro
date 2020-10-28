import api from '../../../../../Services/api'
export default function SalvaNoBanco(dados){
    alert("abriu salvar no banco")
    let prontoEnviar = false

    prontoEnviar = Object.assign(dados.dadosPessoais, dados.enderecoCliente, dados.dadosProfissionais, dados.referenciasPessoais, dados.dadosConjugue, dados.dadosComerciais )
    api.post("Clientes", dados.dadosPessoais).then(response => console.log(response))
    console.log(prontoEnviar)
}