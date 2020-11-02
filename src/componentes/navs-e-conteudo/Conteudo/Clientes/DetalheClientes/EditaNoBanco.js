import api from '../../../../../Services/api'

export default function EditaNoBanco(dados, history) {
    alert("DADOS SALVOS COM SUCESSO! EM INSTANTES VOCÊ SERÁ REDIRECIONADO!")
    let prontoEnviar = false

    prontoEnviar = Object.assign(dados.dadosPessoais, dados.enderecoCliente, dados.dadosProfissionais, dados.referenciasPessoais, dados.dadosConjugue, dados.dadosComerciais)
    api.put("Clientes", prontoEnviar).then(response => {
        console.log(response)
        window.location.href = "/clientes"
        // history.push("/clientes")
    })
    // console.log(prontoEnviar)
    // alert("vai alterar amigao")

}