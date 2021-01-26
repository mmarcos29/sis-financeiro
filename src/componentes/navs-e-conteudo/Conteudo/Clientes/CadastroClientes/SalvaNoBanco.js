import api from '../../../../../Services/api'

export default function SalvaNoBanco(dados, props) {
    alert("DADOS SALVOS COM SUCESSO! EM INSTANTES VOCÊ SERÁ REDIRECIONADO!")
    let prontoEnviar = false

    prontoEnviar = Object.assign(dados.dadosPessoais, dados.enderecoCliente, dados.dadosProfissionais, dados.referenciasPessoais, dados.dadosConjugue, dados.dadosComerciais)
    api.post("Clientes", prontoEnviar).then(response => {
        if(props.getClientes){
            props.getClientes();
            props.sair(true);
        }else{
            console.log(response)
            props.history.push("/clientes")
            window.location.reload()
        }
    })

}