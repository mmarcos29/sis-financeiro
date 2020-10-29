import api from '../../../../../Services/api'

export default function SalvaNoBanco(dados, history) {
    alert("DADOS SALVOS COM SUCESSO! EM INSTANTES VOCÊ SERÁ REDIRECIONADO!")
    let prontoEnviar = false

    prontoEnviar = Object.assign(dados.dadosPessoais, dados.enderecoCliente, dados.dadosProfissionais, dados.referenciasPessoais, dados.dadosConjugue, dados.dadosComerciais)
    api.post("Clientes", prontoEnviar).then(response => {
        console.log(response)
        history.push("/clientes")
    })

}