import api from './api'

export default function EditaNoBanco(dados, history, rota) {
    alert("DADOS SALVOS COM SUCESSO! EM INSTANTES VOCÊ SERÁ REDIRECIONADO!")
    let prontoEnviar = false

    prontoEnviar = Object.assign(dados.dadosPessoais, dados.enderecoCliente, dados.dadosProfissionais, dados.referenciasPessoais, dados.dadosConjugue, dados.dadosComerciais)
    api.put("Clientes", prontoEnviar).then(response => {
        console.log(response)
        window.location.hash = "/clientes"
        window.location.reload()
        // window.location.href = "/clientes"
        // history.push("/clientes")
        // history.reload()
    })
    // console.log(prontoEnviar)
    // alert("vai alterar amigao")

}