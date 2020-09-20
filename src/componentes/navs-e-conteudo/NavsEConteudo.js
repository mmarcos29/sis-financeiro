import React, { Component } from 'react'
import './Styles.css'
import PrimeiraNav from './PrimeiraNav/PrimeiraNav'
import SegundaNav from './SegundaNav/SegundaNav'
import Conteudo from './Conteudo/Conteudo'
import PesquisaInss from './Conteudo/PesquisaInss/PesquisaInss'

import api from '../../Services/api'

class NavsEConteudo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Clientes: [],
            encontrado: null,
            NumeroPesquisado: null,
            contador: 0,
            componente: this.props.children
        }
    }

    async componentWillMount() {
        const request = await api.get("");
        this.setState({ Clientes: request.data });
    }

    alterarPesquisa = (valor) => {
        if (valor) {
            let pesquisado = this.state.Clientes.filter(clientes => clientes.cpf === valor);
            if (pesquisado.length > 0 && pesquisado != null) {
                // this.setState({ componente: <Conteudo><PesquisaInss dados={pesquisado} changeTypeContent={this.props.changeTypeContent}/></Conteudo>})
                // this.setState({ componente: <Conteudo dados={pesquisado} changeTypeContent={this.props.changeTypeContent}/>})
                this.props.mudaDadosClientes(pesquisado)
                // withRouter.push('/hfjgdhjgfhj')
                // return <Redirect to="/login/" />
                // this.setState({ encontrado: pesquisado })
            } else {
                console.log("valor")
                console.log(valor)
                console.log("valor")
                alert("Cliente não encontrado")
            }
        } else {
            alert("Insira algum valor")
        }
    }


    render() {
        return (
            <div id="NavsEConteudo">
                {console.log("********************")}
                {console.log(this.props.tipoContent)}
                {console.log("*******************")}
                <PrimeiraNav />
                <SegundaNav alterarPesquisa={this.alterarPesquisa} />
                {this.props.children}
                {/* {this.state.componente} */}
            </div>
        )
    }
}

export default NavsEConteudo