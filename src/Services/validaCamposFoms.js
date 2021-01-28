export default (dadosProposta, rota) => {
    let retorno = null

    if (rota === "propostas") {
        if (!dadosProposta.clienteId) {
            alert("CAMPO CLIENTE É OBRIGATÓRIO");
        }
        else if (!dadosProposta.corretor) {
            alert("CAMPO CORRETOR É OBRIGATÓRIO");
        }
        else if (!dadosProposta.tipo) {
            alert("CAMPO TIPO PROPOSTA É OBRIGATÓRIO");
        }
        else if (!dadosProposta.banco) {
            alert("CAMPO BANCO É OBRIGATÓRIO");
        }
        else if (!dadosProposta.convenio) {
            alert("CAMPO CONVENIO É OBRIGATÓRIO");
        }
        else if (!dadosProposta.tabela) {
            alert("CAMPO TABELA É OBRIGATÓRIO");
        }
        else if (!dadosProposta.comissaoEmpresa) {
            alert("CAMPO COMISSÂO EMPRESA É OBRIGATÓRIO");
        }
        else if (!dadosProposta.comissaoCorretor) {
            alert("CAMPO COMISSÂO CORRETOR É OBRIGATÓRIO");
        }
        // else if(!dadosProposta.nrProposta){
        //     alert("CAMPO NR PORPOSTA É OBRIGATÓRIO");
        // }
        else if (!dadosProposta.parcelas) {
            alert("CAMPO PARCELAS É OBRIGATÓRIO");
        }
        else if (!dadosProposta.taxa) {
            alert("CAMPO TAXA É OBRIGATÓRIO");
        }
        else if (!dadosProposta.valorProposta) {
            alert("CAMPO VALOR DA PROPOSTA É OBRIGATÓRIO");
        }
        else if (!dadosProposta.valorParcela) {
            alert("CAMPO VALOR PARCELA É OBRIGATÓRIO");
        }
        else if (!dadosProposta.dtPrimeiraParcela) {
            alert("CAMPO DATA DA PRIMEIRA PARCELA É OBRIGATÓRIO");
        }
        // else if(!dadosProposta.parceiro){
        //     alert("CAMPO PARCEIRO É OBRIGATÓRIO");
        // }
        else {
            retorno = dadosProposta
            retorno.clienteId = retorno.clienteId.value
            retorno.corretor = retorno.corretor.value
            retorno.convenio = retorno.convenio.value
            if (retorno.formaContato) {
                retorno.formaContato = retorno.formaContato.value
            }
            retorno.banco = retorno.banco.value
            retorno.tabela = retorno.tabela.value
            retorno.tipo = retorno.tipo.value
            // console.log(retorno)
        }
    }
    if (rota === "esteira") {
        retorno = dadosProposta
        // if (retorno.esteira.value) {
        //     retorno.esteira = retorno.esteira.value
        //     if (retorno.situacao) {
        //         if (retorno.situacao.value) {
        //             retorno.situacao = retorno.situacao.value
        //         }
        //     }
        // }
    }

    return retorno
}