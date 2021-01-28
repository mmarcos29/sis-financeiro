import api from './api'
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default function EditaNoBanco(dados, history, rota, load, observacoes, situacaoProposta) {
    // alert("DADOS SALVOS COM SUCESSO! EM INSTANTES VOCÊ SERÁ REDIRECIONADO!")
    let prontoEnviar = false

    // prontoEnviar = Object.assign(dados.dadosPessoais, dados.enderecoCliente, dados.dadosProfissionais, dados.referenciasPessoais, dados.dadosConjugue, dados.dadosComerciais)
    // api.put("Clientes", prontoEnviar).then(response => {
    //     console.log(response)
    //     window.location.hash = "/clientes"
    //     window.location.reload()
    //     // window.location.href = "/clientes"
    //     // history.push("/clientes")
    //     // history.reload()
    // })
    // console.log(prontoEnviar)
    // alert("vai alterar amigao")
    if (rota === "propostas") {
        api.put("Propostas", dados).then(response => {
            console.log(response)
            window.location.hash = rota
            window.location.reload()
            // window.location.href = "/clientes"
            // history.push(rota)
            // history.reload()
        })
    } else if (rota === "esteira") {
        load(true)
        const ocorrencia = {
            propostaId: dados.id,
            editor: "ADMINISTRADOR",
            data: `${new Date().toLocaleDateString()} - ${new Date().getHours() < 10 ? '0' + new Date().getHours() : '' + new Date().getHours()}:${ new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : '' + new Date().getMinutes()}`,
            esteira: dados.esteira,
            situacao: dados.situacao,
            observacoes: observacoes
        }
        // console.log(ocorrencia)
        api.post(`Ocorrencias/`, ocorrencia).then(response => {
            console.log(response)
            // window.location.hash = rota
            // load(false)
            // window.location.reload()
        })
        setTimeout(() => {
            api.put("Propostas", dados).then(response => {
                console.log(response)
                window.location.hash = rota
                load(false)
                window.location.reload()
            })
        }, 2000);
    }

}